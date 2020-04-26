import React from "react";

import { Card } from "../card/Card";
import "./CardList.css";

export const CardList = ({ monsters }) => (
  <div className="Card__List">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
