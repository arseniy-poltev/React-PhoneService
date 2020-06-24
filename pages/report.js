import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Report from "@/components/views/Report/Report";
import PageHeader from "@/components/layouts/PageHeader";

export default class ReportPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Report Abuse" />
        <Report/>
      </Layout>
    )
  }
}