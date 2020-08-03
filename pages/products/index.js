import React, {Component} from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import Products from "@/components/views/Products/Products";
import { withTranslation } from '@/i18n'


const ProductPage = (props) => (
    <Layout>
        <PageHeader title={props.t("title", {returnObjects: false})} />
        <Products />
    </Layout>


)

export default withTranslation("product")(ProductPage);
