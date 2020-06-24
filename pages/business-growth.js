import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import BusinessGrowth from "@/components/views/BusinessGrowth/BusinessGrowth";
import PageHeader from "@/components/layouts/PageHeader";

export default class BusinessGrowthPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Our Business Growth" />
        <BusinessGrowth/>
      </Layout>
    )
  }
}