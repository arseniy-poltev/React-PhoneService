import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Blog from "@/components/views/Blog/Blog";
import PageHeader from "@/components/layouts/PageHeader";

export default class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="View Our Blog" />
        <Blog/>
      </Layout>
    )
  }
}