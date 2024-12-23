import CategoryCard from "../components/CategoryCard/CategoryCard";
import LearAndGrouwth from "../components/LearnAndGrouwth/LearAndGrouwth";
import Slider from "../components/Slider/Slider";
import Status from "../components/Status/Status";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section>
        <Slider></Slider>
      </section>
      <section className="bg-primaryColor dark:bg-[#111627]">
        <Status></Status>
      </section>
      <section>
        <CategoryCard></CategoryCard>
      </section>
      <section>
        <LearAndGrouwth></LearAndGrouwth>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
    </>
  );
};

export default Home;
