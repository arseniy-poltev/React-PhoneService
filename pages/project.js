import React, {Component} from 'react'
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import Project from "@/components/views/Project/Project";


const ProjectPage = () => (
    <Layout>
        <PageHeader title="Projects" />
        <Project />
    </Layout>


)

export default ProjectPage;
