import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import Services from "@/components/views/Services/Services";
import { withTranslation } from '@/i18n'

class ServicePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Layout>
                    <PageHeader
                        title={this.props.t("title", {returnObjects: false})}
                        subtitle={this.props.t("subTitle", {returnObjects: false})}
                    />
                    <Services />
                </Layout>
            </div>
        )
    }
}


export default withTranslation("itService")(ServicePage)