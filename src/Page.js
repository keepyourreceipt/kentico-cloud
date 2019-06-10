
import React, {Component} from 'react'
import ImageGallery from './ImageGallery'
import TextEditor from './TextEditor'

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {        
        return (            
            this.props.page.content_blocks.modular_content.map( (block, index) => {
                switch( block.system.type ) {
                    case "component__text_editor":
                        return <TextEditor  block={block}/>
                    case "component__image_gallery":
                        return <ImageGallery />
                    default: return
                }
            })
        )        
    }
}