import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import CallForwarding from "@/components/views/CallForwarding/CallForwarding";
import { withTranslation } from '@/i18n'

const CallForwardingPage = (props) => (
  <Layout>
    <PageHeader
      title={props.t("title", {returnObjects: false})}
      subtitle={props.t("subTitle", {returnObjects: false})}
      section="Phone Solutions"
    />
    <CallForwarding />
  </Layout>
)

export default withTranslation("callForwarding")(CallForwardingPage);