import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PrivacyPolicy from "@/components/views/PrivacyPolicy/PrivacyPolicy";
import PageHeader from "@/components/layouts/PageHeader";

export default class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Privacy Policy" />
        <PrivacyPolicy/>
      </Layout>
    )
  }
}