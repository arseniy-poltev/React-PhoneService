import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import CustomerLogin from "@/components/views/CustomerLogin/CustomerLogin";
import PageHeader from "@/components/layouts/PageHeader";

export default class CustomerLoginPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Customer Login" />
        <CustomerLogin/>
      </Layout>
    )
  }
}