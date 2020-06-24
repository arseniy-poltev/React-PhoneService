import React, { Component } from 'react'
import { CallForwardingService } from "@/components/_services/callForwarding.service";
import CallForwardingHeader from './_components/Header';
import WhatIsCallForwarding from './_components/WhatIsCallForwarding';
import CallForwardingFeatures from './_components/CallForwardingFeatures';
import Faq from './_components/Faq';

export default class CallForwarding extends React.Component {
    constructor() {
        super();
        this.state = {
            faqItems: CallForwardingService.getFaqItems(),
        }
    }
    render() {
        return (
            <>
                <CallForwardingHeader />
                <WhatIsCallForwarding />
                <CallForwardingFeatures />
                <Faq content={this.state.faqItems} />
            </>
        )
    }
}