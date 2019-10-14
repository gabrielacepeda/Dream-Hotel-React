import React, { Component } from 'react'
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";

export class Tours extends Component {
    render() {
        return (
            <>
                <Hero hero="toursHero">
                    <Banner title="Check out our services">
                        <Link to="/" className="btn-primary">
                            Return Home</Link>
                    </Banner>
                </Hero>
                <Services />
            </>
        )
    }
}

export default Tours
