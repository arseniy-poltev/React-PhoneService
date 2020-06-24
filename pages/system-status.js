import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import SystemStatus from "@/components/views/SystemStatus/SystemStatus";
import PageHeader from "@/components/layouts/PageHeader";

export default class SystemStatusPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="System Status" />
        <SystemStatus/>
      </Layout>
    )
  }
}