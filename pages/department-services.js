import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import DepartmentServices from "@/components/views/DepartmentServices/DepartmentServices";
import PageHeader from "@/components/layouts/PageHeader";

export default class DepartmentServicesPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Pricing" />
        <DepartmentServices/>
      </Layout>
    )
  }
}