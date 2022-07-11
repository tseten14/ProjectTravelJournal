import React from "react";

export default function Card(props) {
  return (
    /*This is the full component */
    <div className="FullCard">
      {/* This is the Image Component */}

      <div className="CardLeft">
        <img className="photo" src={props.imageUrl} alt="" />
      </div>

      {/* This is the Card Component */}
      <div className="CardRight">
        <small className="country">
          {props.location} &nbsp;
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </small>
        <h1 className="place">{props.title} </h1>
        <p>
          {" "}
          <strong className="date">
            {props.startDate} - {props.endDate}{" "}
          </strong>
        </p>
        <p className="Description">{props.description}</p>
      </div>
    </div>
  );
}
