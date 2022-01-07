import React, { useEffect, useState } from "react";
import "./ModernLayout.css";
import sanityClient from "../../../client.js";
import PortableText from "react-portable-text";
import urlBuilder from "@sanity/image-url";

import Parallax from "../../ParallaxHeader/ParallaxHeader";

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID.toString(),
    dataset: process.env.REACT_APP_SANITY_DATASET_ID.toString(),
  }).image(source);

export default function Layout() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactpage"]{
          parallaximage,
          parallaxtext,
          parallaxheight,
          title,
            panel1,
            panel2,
            panel3,
            panel4,
                  }`
      )
      .then((data) => setContactData(data))
      .catch(console.error());
  }, []);
  return (
    <>
      {contactData &&
        contactData.map((contact, index) => (
          <div key={"Contact" + index}>
            <Parallax
              image={urlFor(contact.parallaximage.asset).url()}
              text={contact.parallaxtext}
              height={contact.parallaxheight}
            />
            <div className="ContactForm">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="contactForm">
                      <form id="contact-form" noValidate>
                        {/* Row 1 of form */}
                        <div className="row formRow">
                          <div className="col-6">
                            <input
                              type="text"
                              name="name"
                              className="form-control formInput"
                              placeholder="Name"
                            ></input>
                          </div>
                          <div className="col-6">
                            <input
                              type="email"
                              name="email"
                              className="form-control formInput"
                              placeholder="Email address"
                            ></input>
                          </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <input
                              type="text"
                              name="subject"
                              className="form-control formInput"
                              placeholder="Subject"
                            ></input>
                          </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className="row formRow">
                          <div className="col">
                            <textarea
                              rows={3}
                              name="message"
                              className="form-control formInput"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <button className="submit-btn" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
