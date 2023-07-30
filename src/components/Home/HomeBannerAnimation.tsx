import Lottie from "lottie-react";
import React from "react";
import animation from "../../../public/img/homeBannerAnimation.json";

const HomeBannerAnimation = () => {
  return <Lottie animationData={animation} loop={true} />;
};

export default HomeBannerAnimation;
