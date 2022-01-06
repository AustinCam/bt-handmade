import React, { useEffect, useState } from "react";
import "./ProductContent.css";
import sanityClient from "../../client.js";
import PricingCard from "../PricingCard/PricingCard.js";
import PortableText from "react-portable-text";

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
            <div
              className="parallax"
              style={{
                backgroundImage: `url(${productContent.parallaximage.asset.url})`,
                minHeight: productContent.parallaxheight + "em",
              }}
            >
              <div className="parallaxText centered">
                {productContent.parallaxtext}
              </div>
            </div>
            <div className="container">
              <PortableText content={productContent.contentsection1} />
              <div className="container grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3"></div>
              {console.log(productContent.products)}
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
              <PortableText content={productContent.contentsection2} />
            </div>
          </div>
        ))}
    </>
  );
}
