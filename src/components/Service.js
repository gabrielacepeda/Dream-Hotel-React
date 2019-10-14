import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Service({ service }) {
    const { name, url, images } = service;
    return (
        <div>
            <article key={index} className="service">
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
};
