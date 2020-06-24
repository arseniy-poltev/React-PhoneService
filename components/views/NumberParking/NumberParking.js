import React, { Component } from 'react'
import { NumberParkingService } from "@/components/_services/numberParking.service";
import Faq from './_components/Faq';
import ParkingList from './_components/ParkingList';
import NumberParkingHeader from './_components/Header';

export default class NumberParking extends React.Component {
    constructor() {
        super();
        this.state = {
            faqItems: NumberParkingService.getFaqItems()
        }
    }
    render() {
        return (
            <>
                <NumberParkingHeader />
                <ParkingList />
                <Faq content={this.state.faqItems} />
            </>
        )
    }
}

