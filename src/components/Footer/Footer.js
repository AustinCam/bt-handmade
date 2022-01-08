import React, { useEffect, useState } from "react";
import "./Footer.css";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"]{
          title,
          importantLinks[]->,
          additionalLinks[]->,
        }`
      )
      .then((data) => setFooterData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <hr />
      {footerData &&
        footerData.map((footerContent, index) => (
          <footer key={"Footer" + index}>
            <div className="container text-center mx-auto">
              <div className="grid grid-cols-3">
                <div>
                  <h4>Important Links</h4>
                  <ul>
                    {footerContent.importantLinks &&
                      footerContent.importantLinks.map(
                        (importantLink, index) => (
                          <li key={"importantLink" + index}>
                            <a
                              href={importantLink.to}
                              target={"_blank"}
                              rel="noreferrer"
                            >
                              {importantLink.label}
                            </a>
                          </li>
                        )
                      )}
                  </ul>
                </div>

                <div className="container">
                  <div>
                    <h4>Social Media</h4>
                  </div>
                  <div className="container">
                    <div className="social-media-container">
                      <a
                        href="http://twitter.com/"
                        target={"_blank"}
                        className="social-media-icon"
                        rel="noreferrer"
                      >
                        <Icons.FaTwitter size={40} />
                      </a>

                      <a
                        href="http://facebook.com/"
                        target={"_blank"}
                        className="social-media-icon"
                        rel="noreferrer"
                      >
                        <Icons.FaFacebook size={40} />
                      </a>
                      <a
                        href={"http://instagram.com/"}
                        target={"_blank"}
                        className="social-media-icon"
                        rel="noreferrer"
                      >
                        <Icons.FaInstagram size={40} />
                      </a>
                      <a
                        href={"http://pinterest.com/"}
                        target={"_blank"}
                        className="social-media-icon"
                        rel="noreferrer"
                      >
                        <Icons.FaPinterest size={40} />
                      </a>
                      <a href="/about" className="social-media-icon">
                        <Icons.FaYoutube size={40} />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4>Additional Links</h4>
                  <ul>
                    {footerContent.additionalLinks &&
                      footerContent.additionalLinks.map(
                        (additionalLink, index) => (
                          <li key={"additionalLink" + index}>
                            <a
                              href={additionalLink.to}
                              target={"_blank"}
                              className="social-media-icon"
                              rel="noreferrer"
                            >
                              {additionalLink.label}
                            </a>
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            </div>
            <p>
              &copy; 2021-Present /{" "}
              {process.env.REACT_APP_COMPANY_NAME.toString()}
            </p>
          </footer>
        ))}
    </>
  );
}
