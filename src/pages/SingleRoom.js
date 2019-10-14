import React, { Component } from "react";
import defaultBcg from "../images/ocean-room1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zebra: this.props.match.params.zebra,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  // lifecycle method
  // componentDidMount() {}
  render() {
    window.scrollTo(0, 0);
    const { getRoom } = this.context;
    const room = getRoom(this.state.zebra);
    if (!room) {
      return (
        <div className="error">
          <h3>Uh Oh! No such room could be found!</h3>
          <Link to="/rooms" className="btn-primary-back">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">

          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}

          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : ${price} USD</h6>
              <h6>Size : {size} sq. ft.</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
