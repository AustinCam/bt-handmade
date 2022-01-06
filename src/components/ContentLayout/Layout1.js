import React from "react";
import { Button } from "react-bootstrap";
import PortableText from "react-portable-text";
import "./Layout1.css";

function ContentBlock(props) {
  return (
    <>
      <div className="container mx-auto">
        <h2>{props.title}</h2>
        <div className="grid md:grid-col-2 lg:grid-cols-2 gap-3">
          <div>
            <img src={props.image} alt="contentImage" />
          </div>
          <div>
            <PortableText content={props.content} />
            <div className="text-center">
              <Button href={props.buttonlink} className="btn btn-main">
                {props.buttontext}
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 pt-4">
          <PortableText content={props.quote} />
        </div>
      </div>
    </>
  );
}

export default ContentBlock;
