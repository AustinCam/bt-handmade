import React, { useEffect, useState } from "react";
import "./ModernLayout.css";
import sanityClient from "../../../client.js";
import { urlFor } from "../../ImageUrl";
import PortableText from "react-portable-text";
import Parallax from "../../ParallaxHeader/ParallaxHeader";

// const urlFor = (source) =>
//   urlBuilder({
//     projectId: process.env.REACT_APP_SANITY_PROJECT_ID.toString(),
//     dataset: process.env.REACT_APP_SANITY_DATASET_ID.toString(),
//   }).image(source);

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
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                <PortableText content={about.panel1} className="container" />
                <div>
                  <img src={urlFor(about.panel2.asset).url()} alt="AboutMe" />
                </div>
                <div>
                  <img src={urlFor(about.panel3.asset).url()} alt="AboutMe" />
                </div>
                <PortableText content={about.panel4} className="container" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
