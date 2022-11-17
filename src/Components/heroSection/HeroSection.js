import React from "react";
import "./heroSection.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const HeroSection = () => {


  return (
    <>
      <div className="hero-wapper">
        <div className="hero-box">

          <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showArrows={false}  >
            <div>
              <img src="/imgs/heroImg/img1.jpg" alt="loding.." />
              <h2>I don't do fashion. I am fashion.</h2>
            </div>
            <div>
              <img src="/imgs/heroImg/img4.jpg" alt="loding.." />
              <h2>Care for your clothes like the good friends they are.</h2>
            </div>
            <div>
              <img src="/imgs/heroImg/img2.jpg" alt="loding.." />
              <h2>Clothes mean nothing until someone lives in them.</h2>
            </div>
          </Carousel>

        </div>
      </div>
    </>
  );
};

export default HeroSection;
