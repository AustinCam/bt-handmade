import react from "react";
import { Carousel } from "react-bootstrap";


import "./ParallaxSlideShow.css";
import slideshow1 from "C:/Users/Austin/Projects/altdogtraining/src/images/training3.jpg";
import slideshow2 from "C:/Users/Austin/Projects/altdogtraining/src/images/training4.jpg";
import slideshow3 from "C:/Users/Austin/Projects/altdogtraining/src/images/training5.jpg";

function parallaxSlideShow() {
  return (
    <>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={slideshow3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default parallaxSlideShow;
