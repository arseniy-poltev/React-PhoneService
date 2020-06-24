import { withTranslation } from '@/i18n'
import React, { Component } from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="contact-us-form gray-light-bg rounded p-5">
                <h4>{this.props.t("form_title_ready_to_get_started")}</h4>
                <form action="#" method="POST" id="contactForm1" className="contact-us-form"
                    noValidate="novalidate">
                    <div className="form-row">
                        <div className="col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name"
                                    placeholder={this.props.t("form_placeholder_name")} required="required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email"
                                      placeholder={this.props.t("form_placeholder_email")} required="required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="7"
                                    cols="25"    placeholder={this.props.t("form_placeholder_message")}></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <button type="submit" className="btn btn-danger" id="btnContactUs">
                            {this.props.t("form_btn_send_msg")}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withTranslation("helpCenter")(ContactForm)