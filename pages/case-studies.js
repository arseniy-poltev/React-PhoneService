import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import CaseStudy from "@/components/views/CaseStudy/CaseStudy";
import PageHeader from "@/components/layouts/PageHeader";

export default class CaseStudyPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Our Case Studies" />
        <CaseStudy/>
      </Layout>
    )
  }
}