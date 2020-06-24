import React, { Component } from 'react'
import Layout from "@/components/layouts/Layout";
import Home from "@/components/views/Home/Home";
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';

class HomePage extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    return (
      <React.Fragment>
      <Layout>
        <Home/>
      </Layout>
      </React.Fragment>
    )
  }
}


HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation("footer")(HomePage)