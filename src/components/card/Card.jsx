import React from "react";
import "./Card.css";

export const Card = (props) => (
  <div className="Card__Container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
    <p>
      <b>City</b>: {props.monster.address.city}
    </p>
  </div>
);
