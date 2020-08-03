import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import { withTranslation } from '@/i18n'

class Page404 extends Component {
    render() {
        return (
            <Layout>
                <PageHeader title={this.props.t("404_page_title", {returnObjects: false})} subtitle={this.props.t("404_page_subtitle", {returnObjects: false})}/>
                <section className="project-details-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-12">
                                <div className="project-details-content">
                                    <div className="section-heading mb-5 text-center">
                                        <h2>{this.props.t("404_page_content")}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default withTranslation("common")(Page404)