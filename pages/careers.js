import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Careers from "@/components/views/Careers/Careers";
import PageHeader from "@/components/layouts/PageHeader";

export default class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Check Our Careers" />
        <Careers/>
      </Layout>
    )
  }
}