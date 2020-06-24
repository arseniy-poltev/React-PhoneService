import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import TermsService from "@/components/views/TermsService/TermsService";
import PageHeader from "@/components/layouts/PageHeader";

export default class TermsServicePage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Terms Of Service" />
        <TermsService/>
      </Layout>
    )
  }
}