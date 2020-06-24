import React, { Component } from 'react'
import { ITService } from "@/components/_services/iTservice.service";
import ServiceHeader from "./_components/Header";
import LeavingChance from './_components/LeavingChance';
import PeaceOfMind from './_components/PeaceOfMind';
import CanProvide from './_components/CanProvide';

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ServiceHeader />
                <LeavingChance />
                <CanProvide />
                <PeaceOfMind />
            </>
        )
    }
}
