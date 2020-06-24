import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import Contact from "@/components/views/Contact/Contact";
import { withTranslation } from '@/i18n'

class ContactPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <PageHeader title={this.props.t("title")} />
                <Contact />
            </Layout>
        )
    }
}

export default withTranslation("contact")(ContactPage)