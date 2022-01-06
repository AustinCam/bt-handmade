import React, { useEffect, useState } from "react";
import "./ModernLayout.css";
import sanityClient from "../../../client.js";
import PortableText from "react-portable-text";
import urlBuilder from "@sanity/image-url";

import Parallax from "../../ParallaxHeader/ParallaxHeader";

const urlFor = (source) =>
  urlBuilder({ projectId: "s4mmkd89", dataset: "production" }).image(source);

export default function Layout() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "aboutpage"]{
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
      .then((data) => setAboutData(data))
      .catch(console.error());
  }, []);
  console.log(aboutData);
  return (
    <>
      {aboutData &&
        aboutData.map((about, index) => (
          <div key={"About" + index}>
            <Parallax
              image={urlFor(about.parallaximage.asset).url()}
              text={about.parallaxtext}
              height={about.parallaxheight}
            />
            <div className="container mx-auto">
              <h2 className="mb-5">{about.title}</h2>
              <div className="grid grid-cols-2">
                <PortableText content={about.panel1} />
                <div>
                  <img src={urlFor(about.panel2.asset).url()} alt="AboutMe" />
                </div>
                <div>
                  <img src={urlFor(about.panel3.asset).url()} alt="AboutMe" />
                </div>
                <PortableText content={about.panel4} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
