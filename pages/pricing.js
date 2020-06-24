import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Pricing from "@/components/views/Pricing/Pricing";
import PageHeader from "@/components/layouts/PageHeader";

export default class PricingPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Pricing" />
        <Pricing/>
      </Layout>
    )
  }
}