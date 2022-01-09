import { Button } from "react-bootstrap";
import PortableText from "react-portable-text";
import "./PricingCard.css";

export default function PricingCard(props) {
  return (
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <h4>{props.title}</h4>
              <img class="img" src={props.logo} alt="" />
              <div class="img-info">
                <div class="info-inner">
                  <PortableText content={props.description} />

                  <span class="p-company"></span>
                </div>
                <div class="a-size">
                  Available sizes : <span class="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a class="cart" href="#">
                <span class="price">{"$" + props.price}</span>
                <span class="add-to-cart">
                  <span class="txt">Add to cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function PricingCard(props) {
//   return (
//     <article className="pricingCard text-center" key={props.index}>
//       <h3>{props.title}</h3>
//       <img src={props.logo} alt="PricingLogo" />
//       <hr />
//       <h4>${props.price}</h4>
//       <PortableText content={props.description} />
//       <div className="container">
//         <Button href="/contact" className="btn btn-alternate">
//           Buy Now
//         </Button>
//       </div>
//     </article>
//   );
// }
