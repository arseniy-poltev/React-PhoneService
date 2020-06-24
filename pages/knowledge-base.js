import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import KnowLedgeBase from "@/components/views/KnowLedgeBase/KnowLedgeBase";
import PageHeader from "@/components/layouts/PageHeader";

export default class KnowLedgeBasePage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="KnowLedge Base" />
        <KnowLedgeBase/>
      </Layout>
    )
  }
}