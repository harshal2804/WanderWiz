import React, { Component } from "react";
import "../css/Itinerary.css";

export default function Itinerary({ title, description, imageUrl }) {

    return (
      <div className="m-4 w-100 col-12 col-sm-6 col-lg-3" style={{ maxWidth: "260px", cursor: "pointer" }}>
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            minHeight: "353px",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <div className="advisor_thumb">
            <img
              src={imageUrl.prefix + "200x200" + imageUrl.suffix}
              alt=""
            />
          </div>

          <div className="single_advisor_details_info">
            <h6>{title}</h6>
            <p className="designation">{description} days trip</p>
          </div>
        </div>
      </div>
    );
}