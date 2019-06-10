import React from 'react'

export default function TextEditor(props) {
    return (
        <section className="container py-5">
            <div className="row py-5">
                <div className="col-sm-9">
                    {props.element && props.element.value && 
                        <div dangerouslySetInnerHTML={{__html: props.element.value}}></div>
                    }
                </div>
            </div>
        </section>
    )
}