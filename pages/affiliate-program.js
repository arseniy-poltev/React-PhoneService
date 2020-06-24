import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import AffiliateProgram from "@/components/views/AffiliateProgram/AffiliateProgram";
import PageHeader from "@/components/layouts/PageHeader";
import { withTranslation } from '@/i18n'

class AffiliateProgramPage extends Component {
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
                <AffiliateProgram />
            </Layout>
        )
    }
} 

export default withTranslation("affiliateProgram")(AffiliateProgramPage)