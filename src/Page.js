
import React, {Component} from 'react'
import ImageGallery from './ImageGallery'
import TextEditor from './TextEditor'

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        const elements = Object.keys(this.props.page.elements)
        return (
            elements.map( (element, index) => {
                switch( element ) {
                    case "text_editor__text_editor":
                        return <TextEditor element={this.props.page.elements[element]} />
                    case "image_gallery__gallery_images":
                        return <ImageGallery element={this.props.page.elements[element]} />
                    default: return
                }
            })
        )        
    }
}