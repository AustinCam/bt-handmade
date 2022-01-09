import React, { useEffect, useState } from "react";
import "./ProductContent.css";
import sanityClient from "../../client.js";
import PricingCard from "../PricingCard/PricingCard.js";
import PortableText from "react-portable-text";
import Parallax from "../ParallaxHeader/ParallaxHeader";

export default function ProductContent(props) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "productpage"]{
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
           contentsection1,
           contentsection2,
           products[]->{
            title,
            slug,
            logo {
              asset->{
                _id,
                url
              },
              alt
            },
            price,
            description,
            },
        }`
      )
      .then((data) => setProductData(data))
      .catch(console.error());
  }, []);

  return (
    <>
      {productData &&
        productData.map((productContent, index) => (
          <div key={"ProductContent" + index}>
            <Parallax
              image={productContent.parallaximage.asset.url}
              height={productContent.parallaxheight}
              text={productContent.parallaxtext}
            />

            <div className="container">
              <PortableText content={productContent.contentsection1} />
              <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
                {productContent.products &&
                  productContent.products.map((product, index) => (
                    <PricingCard
                      key={product.title + index}
                      title={product.title}
                      logo={product.logo.asset.url}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
              </div>
              <div className="container mt-3">
                <PortableText content={productContent.contentsection2} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
