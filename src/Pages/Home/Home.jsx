import React from "react";
import HeroSlider from "../../Components/HeroSlider";
import CategoryUI from "../../Components/CategoryUI";
import TestimonialGrid from "../../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <CategoryUI></CategoryUI>
      <TestimonialGrid></TestimonialGrid>
    </div>
  );
};

export default Home;
