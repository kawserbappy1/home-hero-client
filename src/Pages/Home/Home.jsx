import HeroSlider from "../../Components/HeroSlider";
import CategoryUI from "../../Components/CategoryUI";
import TestimonialGrid from "../../Components/Testimonial";
import PriceTable from "../../Components/PriceTable";
import ContactFormSection from "../../Components/ContactFormSection";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for
AOS.init();
const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <CategoryUI></CategoryUI>
      <TestimonialGrid></TestimonialGrid>
      <PriceTable></PriceTable>
      <ContactFormSection></ContactFormSection>
    </div>
  );
};

export default Home;
