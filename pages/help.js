import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import Help from "@/components/views/Help/Help";
import { withTranslation } from '@/i18n'

class HelpPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <PageHeader
                    title={this.props.t("title")}
                    subtitle={this.props.t("subTitle")}
                />
                <Help />
            </Layout>
        )
    }
}

export default withTranslation("helpCenter")(HelpPage)