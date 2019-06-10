import React from 'react'

export default function TextEditor(props) {
    return (
        <section className="container py-5">
            <div className="row py-5">
                <div className="col-sm-9">
                    {props.block && props.block.elements && 
                        <div dangerouslySetInnerHTML={{__html: props.block.elements.text_editor.value}}></div>
                    }
                </div>
            </div>
        </section>
    )
}