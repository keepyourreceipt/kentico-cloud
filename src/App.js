import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import axios from 'axios'

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
      this.setState({
        pages: response.data
      })
    }).catch( (error) => {
      console.log( error )
    })
  }
  
  render = () => {
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
            {this.state.pages && this.state.pages.items.map( (page, index) => 
              <Route exact path={'/' + page.elements.untitled_url_slug.value} render={ routeProps => <Page {...routeProps} page={page} /> } />
            )}                                       
          </Switch>
        </BrowserRouter>
      </div>
    )
  }  
}
