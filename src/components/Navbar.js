import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {

    return (
      <nav className="navbar">
        <div className="nav-center">
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li className="contact">
              <Link to="/">+1800 555 2424
              contact@dreamhotel.com</Link>
            </li>
            <li>
              <Link to="/rooms">Accomodation</Link>
            </li>
            <li>
              <Link to="/tours">Services</Link>
            </li>
          </ul>
          <div className="nav-header">
            <Link to="/">
              <h1>Dream</h1>
            </Link>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li className="about"><Link to="/">About</Link></li>
            <li className="email"><Link to="malito:contact@dreamhotel.com">Contact</Link></li>
            <li className="reserve"><Link to="malito:contact@dreamhotel.com">Reserve now</Link></li>
          </ul>
          <button type="type" className="nav-btn" onClick={this.handleToggle}>
            <FaBars className="nav-icon" />
          </button>


        </div>
      </nav>
    );
  }
}
