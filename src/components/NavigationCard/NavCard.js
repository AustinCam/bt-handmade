import React from "react";
import "./NavCard.css";

function NavCard(props) {
  return (
    <>
      <div
        href={props.link}
        className="nav-card"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p className="nav-card-header">{props.header}</p>
      </div>
    </>
  );
}

export default NavCard;
