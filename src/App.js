import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'
import axios from 'axios'

import NotFound from './NotFound'
import Page from './Page'

export default class App extends Component {
  constructor(props) {
    super(props)    
    this.state = {}
  }

  componentDidMount = () => {
    axios({
      method: 'get',
      url: 'https://deliver.kenticocloud.com/878217fc-c9a8-00f9-7e4e-ada37354c9e2/items?system.type=page'
    }).then( (response) => {
      var pages = []
      var items = response.data.items
      var modular_content = response.data.modular_content
      
      items.map( (item, index) => {   
        var item_modular_content_ids = item.elements.content_blocks.modular_content
        var item_modular_content = []                
        
        if ( item_modular_content_ids ) {
          item_modular_content_ids.map( (id, index) => {
            var modular_content_elements = modular_content[id]
            item_modular_content.push( modular_content_elements )
          })
        }   
        
        var page = {
          ...item.elements,
          content_blocks: {
            modular_content: item_modular_content
          }
        }
        pages.push(page)

      })    
                
      this.setState({
        pages: pages
      })
    }).catch( (error) => {
      console.log( error )
    })
  }
  
  render = () => {
    if ( this.state.pages ) {
      return (
        <div className="App">        
          <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/home">Home</Link>         
  
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                  </li>
                              
                </ul>           
              </div>
            </nav>
            <Switch>                                    
              {this.state.pages && this.state.pages.map( (page, index) => 
                <Route exact path={'/' + page.formatted_url_slug__automatic_.value} render={ routeProps => <Page {...routeProps} page={page} /> } />
              )}                                       
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      )
    } else {
      return(
        <h2>Loading...</h2>
      )
    }    
  }  
}
