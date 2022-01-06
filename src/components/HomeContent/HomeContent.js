import React, { useEffect, useState } from "react";
import "./HomeContent.css";
import sanityClient from "../../client.js";
import ContentBlock from "../ContentLayout/Layout1.js";
import Parallax from "../ParallaxHeader/ParallaxHeader";
import Tile from "../Tile/Tile.js";

export default function HomeContent(props) {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "homecontent"]{
          title,
          parallaximage{
            asset->{
              _id,
              url
            },
            alt
          },      
          parallaxtext,
          parallaxheight,
          parallaxtextposition,
          tile1{
           tiletext,
           tilelink,
           tileimage{
            asset->{
              _id,
              url
             },
            alt
            },
          },
          tile2{
           tiletext,
           tilelink,
           tileimage{
            asset->{
              _id,
              url
             },
            alt
            },
          },
          tile3{
           tiletext,
           tilelink,
           tileimage{
            asset->{
              _id,
              url
             },
            alt
            },
          },
          content{
            contenttitle,
            content,
            buttonlink,
            buttontext,
            quote,
            contentimage{
              asset->{
                _id,
                url
               },
              alt
              },
          },
      }`
      )
      .then((data) => setHomeData(data))
      .catch(console.error());
  }, []);
  return (
    <>
      {homeData &&
        homeData.map((home, index) => (
          <div key={"HomeContent" + index}>
            <Parallax
              image={home.parallaximage.asset.url}
              height={home.parallaxheight}
              text={home.parallaxtext}
            />
            <div className="container grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
              <Tile
                image={home.tile1.tileimage.asset.url}
                header={home.tile1.tiletext}
                link={home.tile1.tilelink}
              />
              <Tile
                image={home.tile2.tileimage.asset.url}
                header={home.tile2.tiletext}
                link={home.tile2.tilelink}
              />
              <Tile
                image={home.tile3.tileimage.asset.url}
                header={home.tile3.tiletext}
                link={home.tile3.tilelink}
              />
            </div>
            <hr />
            <ContentBlock
              title={home.content.contenttitle}
              image={home.content.contentimage.asset.url}
              content={home.content.content}
              buttontext={home.content.buttontext}
              buttonlink={home.content.buttonlink}
              quote={home.content.quote}
            />
            <hr />
          </div>
        ))}
    </>
  );
}
