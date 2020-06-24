import React, { Component } from 'react'
import { AffiliateService } from "@/components/_services/affiliateService.service";
import AffiliateProgramHeader from './_components/Header';
import HowDoesitWork from './_components/HowDoesitWork';
import Faq from './_components/Faq';
import BecomeAndAffiliate from './_components/BecomeAndAffiliate';

export default class AffiliateProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqItems: AffiliateService.getFaqItem()
        }
    }
    render() {
        return (
            <>
                <AffiliateProgramHeader />
                <HowDoesitWork />
                <Faq content={this.state.faqItems} />
                <BecomeAndAffiliate />
            </>
        )
    }
}