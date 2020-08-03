import React, {Component} from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import ProductDetail from "@/components/views/Products/ProductDetail";
import { i18n, withTranslation } from '@/i18n'


const ProductDetailPage = (props) => (
    <Layout>
        <PageHeader title={props.t("product_detail_title", {returnObjects: false})} />
        <ProductDetail />
    </Layout>


)

export default withTranslation("product")(ProductDetailPage);
