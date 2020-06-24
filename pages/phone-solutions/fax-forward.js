import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import FaxForward from "@/components/views/FaxForward/FaxForward";
import { withTranslation } from '@/i18n'

class FaxForwardPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <PageHeader
                    title={this.props.t("title", {returnObjects: false})}
                    subtitle={this.props.t("subTitle", {returnObjects: false})}
                />
                <FaxForward />
            </Layout>
        )
    }
}

export default withTranslation("faxForwarding")(FaxForwardPage)