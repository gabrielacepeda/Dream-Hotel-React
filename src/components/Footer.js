import React, { Component } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";




export default class Footer extends Component {

    render() {
        return (

            <div className="footer-container">
                <div className="footer-items">
                    <h1>Dream</h1>
                    <ul>

                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Reserve</Link></li>
                        <li className="email"><Link to="malito:contact@dreamhotel.com">Contact</Link></li>
                        <li><FaTwitter className="twitter" /></li>
                        <li><FaInstagram className="instagram" /></li>
                    </ul>
                </div>
            </div>

        )
    }
}

