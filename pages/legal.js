import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Legal from "@/components/views/Legal/Legal";
import PageHeader from "@/components/layouts/PageHeader";

export default class LegalPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Legal Information" />
        <Legal/>
      </Layout>
    )
  }
}