import HeroSlider from "../../Components/HeroSlider";
import CategoryUI from "../../Components/CategoryUI";
import TestimonialGrid from "../../Components/Testimonial";
import PriceTable from "../../Components/PriceTable";
import ContactFormSection from "../../Components/ContactFormSection";
import AOS from "aos";
import "aos/dist/aos.css";
import TopRatedProduct from "../../Components/TopRatedProduct";
AOS.init();
const Home = () => {
  return (
    <>
      <HeroSlider></HeroSlider>
      <CategoryUI></CategoryUI>
      <TopRatedProduct></TopRatedProduct>
      <TestimonialGrid></TestimonialGrid>
      <PriceTable></PriceTable>
      <ContactFormSection></ContactFormSection>
    </>
  );
};

export default Home;
