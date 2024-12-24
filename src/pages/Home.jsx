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
      <section className=" md:bg-gradient-to-r from-primaryColor via-primaryColor/70 to-primaryColor/90 md:dark:bg-gradient-to-r dark:from-slate-600 dark:to-slate-800">
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
