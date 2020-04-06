import React from "react";

import "./playerCard.css";

const PlayerCard = props => {
  return <div className="player-card">{props.children}</div>;
};

export default PlayerCard;