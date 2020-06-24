import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import NumberParking from "@/components/views/NumberParking/NumberParking";
import { withTranslation } from '@/i18n'

const CallForwardingPage = (props) => (
  <Layout>
    <PageHeader
      title={props.t("title", {returnObjects: false})}
      subtitle={props.t("subTitle", {returnObjects: false})}
    />
    <NumberParking />
  </Layout>
)

export default withTranslation("numberParking")(CallForwardingPage);
