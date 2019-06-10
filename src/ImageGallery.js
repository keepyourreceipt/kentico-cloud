import React from 'react'

export default function ImageGallery(props) {
    return (
        <section className="container">
            <div className="row">                
                {props.element && props.element.value && 
                    props.element.value.map( (image, index) => {
                        return (
                            <div className="col-sm-4">
                                <img className="img-fluid" src={image.url} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}