import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../images/defaultBcg.jpeg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, zebra, images, price } = room;
  let divStyle = {
    width: "calc(0px + 100%)",
  }
  return (
    <div>
      <div className="room-name-container">
        <div className="room-info">{name} <p>Starting at: ${price}</p></div>

      </div>
      <article className="room">


        <Link to={`/rooms/${zebra}`} className="cta line--link-animation" >

          <div className="img-container">



            <img src={images[0] || defaultImage} alt="single project" />

          </div>
          <div className="explore-btn">
            <span className="room-info-btn">Explore</span>
            {/* <span className="line--animated" style={divStyle}></span> */}
          </div>
        </Link>

      </article >
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    zebra: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
