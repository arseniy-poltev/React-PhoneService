import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Service911 from "@/components/views/Service911/Service911";
import PageHeader from "@/components/layouts/PageHeader";
import { withTranslation } from '@/i18n'

export default class Service911Page extends Component {
  render() {
    return (
      <Layout>
        <PageHeader title="911 Service" />
        <Service911/>
      </Layout>
    )
  }
}