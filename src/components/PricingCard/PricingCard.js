import { Button } from "react-bootstrap";
import PortableText from "react-portable-text";
import "./PricingCard.css";

export default function PricingCard(props) {
  return (
    <article className="pricingCard text-center mt-4 mb-4" key={props.index}>
      <h3>{props.title}</h3>
      <img src={props.logo} alt="PricingLogo" />
      <hr />
      <h4>
        ${props.price}
        <small> per lesson</small>
      </h4>
      <PortableText content={props.description} />
      <div className="container">
        <Button href="/contact" className="btn btn-alternate">
          Sign up
        </Button>
      </div>
    </article>
  );
}
