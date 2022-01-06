import React from "react";
import { NavLink } from "react-bootstrap";
import "./Tile.css";

function Tile(props) {
  return (
    <>
      <NavLink
        href={props.link}
        className="Tile"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="nav-card-header">{props.header}</div>
      </NavLink>
    </>
  );
}

export default Tile;
