import React, { Component } from 'react'
import ContactForm from "@/components/_global/ContactForm";
import { withTranslation } from '@/i18n'

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="contact-us-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h5 className="text-center">{this.props.t("description")}</h5>
                        </div>
                    </div>
                    <div className="row justify-content-around mt-5">
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                        <div className="col-md-5">
                            <div className="contact-us-content">
                                <h5>{this.props.t("customer_care")}</h5>
                                <span>{this.props.t("email")}: <a href="mailto:info@tridacom.com"
                                    className="link-color">info@tridacom.com</a></span>
                                <br />
                                <span>{this.props.t("phone")}: 1-877-489-0123</span>
                                <h5 className="mt-5">{this.props.t("emergency_support")}: </h5>
                                <h5>{this.props.t("sales_inquiries")}: </h5>
                                <span>{this.props.t("email")}: <a href="mailto:info@tridacom.com"
                                    className="link-color">info@tridacom.com</a></span>
                                <br />
                                <span>{this.props.t("phone")}: 1-877-489-0123</span>
                                <h5 className="mt-5">{this.props.t("affiliate_program")}: </h5>
                                <span>{this.props.t("program_content")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default withTranslation("contact")(Contact)