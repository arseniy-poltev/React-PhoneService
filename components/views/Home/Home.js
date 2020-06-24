import React, { Component } from 'react'
import Slider from "@/components/views/Home/_components/Slider";
import Promo from "@/components/views/Home/_components/Promo";
import About from "@/components/views/Home/_components/About";
import CallToAction from "@/components/views/Home/_components/CallToAction";
import GettingStart from '@/components/views/Home/_components/GettingStart';
import { HomeService } from "@/components/_services/home.service";
import { NextSeo } from 'next-seo';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <NextSeo
          title={`Home | Tridacom IT Solutions - Managed IT and Voice Services`}
          description={`Tridacom IT Solutions - Managed IT and Voice Services `}
          canonical="https://threesisters.tridacom.com"
        />
        <Slider />
        <Promo marginTop="mt--165" />
        <About />
        <GettingStart />
        <CallToAction />
      </>
    )
  }
}