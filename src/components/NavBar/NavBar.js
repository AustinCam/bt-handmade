import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../images/Logo.png";
import sanityClient from "../../client.js";

function NavBar() {
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
        <Navbar.Brand href="/" className="col-xs-1 col-lg-1">
          <img
            src={Logo}
            id="Navbar-brand"
            alt="ALT Dog Training Logo"
            width={"100%"}
          />
          {/* <Logo /> */}
        </Navbar.Brand>
        <div className="container">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-center mx-auto"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              {navData &&
                navData.map((nav, index) => (
                  <Nav.Link
                    key={"Navigation" + index}
                    href={nav.to}
                    disabled={!nav.active}
                    className="mx-auto"
                  >
                    {nav.title}
                  </Nav.Link>
                ))}
              {/* <Nav.Link
              href="/"
              className="col-lg-1 offset-2"
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/sessions"
              className="col-lg-1"
              style={{ color: "white" }}
            >
              Training
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="col-lg-1"
              style={{ color: "white" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/events"
              className="col-lg-1"
              style={{ color: "white" }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="col-lg-1"
              style={{ color: "white" }}
            >
              Contact
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
