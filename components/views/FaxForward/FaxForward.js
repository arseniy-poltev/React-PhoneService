import React, { Component } from 'react'
import PageHeader from "@/components/layouts/PageHeader";
import { FaxForwardService } from "@/components/_services/faxForward.service";
import FaxForwardHeader from './_components/Header';
import FaxForwardItems from './_components/FaxForwardItems';
import WhatIsVirtualNumber from './_components/WhatIsVirtualNumber';
import VirtualNumTypeList from './_components/VirtualNumTypeList';
import Faq from './_components/Faq';

export default class AffiliateProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqItems: FaxForwardService.getFaqItems(),
            faqPortInNumItems: FaxForwardService.getFaqPortInNumItems(),
            pricingItems: FaxForwardService.getPricingItems(),
        }
    }
    render() {
        return (
            <>
                <FaxForwardHeader />
                <FaxForwardItems />
                <WhatIsVirtualNumber />
                <VirtualNumTypeList />
                <Faq
                    faqItems={this.state.faqItems}
                    faqPortInNumItems={this.state.faqPortInNumItems}
                    pricingItems={this.state.pricingItems}
                />
            </>
        )
    }
}