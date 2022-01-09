import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { urlFor } from "../ImageUrl";
import sanityClient from "../../client.js";

function NavBar() {
  const [logoData, setLogoData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "logo"]{
          title,
          logo
          }`
      )
      .then((data) => setLogoData(data))
      .catch(console.error);
  }, []);

  const [navData, setNavData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "navigation"] | order(position){
          title,
          to,
          position,
          active,
          }`
      )
      .then((data) => setNavData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar expand="md">
        <Navbar.Brand href="/" className="col-xs-2 col-lg-1">
          {logoData && (
            <img
              src={urlFor(logoData[0].logo.asset).url()}
              id="Navbar-brand"
              alt={process.env.REACT_APP_COMPANY_NAME + " Logo"}
              width={"100%"}
            />
          )}
        </Navbar.Brand>
        <div className="col-xs-10 col-sm-11">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 col-md-11">
              {navData &&
                navData.map((nav, index) => (
                  <Nav.Link
                    className="mx-auto"
                    key={"Navigation" + index}
                    href={nav.to}
                    disabled={!nav.active}
                  >
                    {nav.title}
                  </Nav.Link>
                ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
