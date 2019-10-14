import React, { Component } from "react";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [

      {
        title: "Spa & Retreat",
        url: "spa",
        info:
          " Meet one of our yogis for a complimentary class, indulge in a rejuvenating massage, or take the first steps on a life-changing path at our Ayurvedic Retreat, an enclave of ancient knowledge and infinite well-being set within its own herb garden."
      },
      {
        title: "Dining",
        url: "dining",
        info:
          "This contemporary Italian restaurant serves light Mediterranean fare during the day and offers a fine dining experience in the evening, serving up vibrant dishes with a southern Italian twist by Neapolitan Chef Ciro D'Amico."
      },
      {
        title: "Sunset Fishing",
        url: "fishing",
        info:
          "Cast off and catch your dinner – our chefs will be ready to cook it to taste. This two-hour dhoni experience provides a picturesque vantage point from which to appreciate our tropical paradise. It’s pretty relaxing too...until the time comes to reel something in!"
      }
    ]
  };
  render() {
    return (


      <section className="services">
        <Title title="Treat Yourself" id="services-title" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>


            );
          })}


        </div>
      </section>

    );
  }

}
