import React, { Component } from 'react'
import ContactForm from "@/components/_global/ContactForm";

export default class Help extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <section className="contact-us-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}