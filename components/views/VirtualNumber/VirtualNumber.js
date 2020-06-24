import React, { Component } from 'react'
import { virtualNumberService } from "@/components/_services/virtualNumber.service";
import VirtualNumberHeader from './_components/Header';
import WhyUseVirtualNum from './_components/WhyUseVirtualNum';
import ChooseHowToAnswer from './_components/ChooseHowToAnswer';
import Faq from './_components/Faq';

export default class NumberParking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faqItems: virtualNumberService.getFaqItems()
        }
    }
    render() {
        return (
            <>
                <VirtualNumberHeader />
                <WhyUseVirtualNum />
                <ChooseHowToAnswer />
                <Faq content={this.state.faqItems} />
            </>
        )
    }
}