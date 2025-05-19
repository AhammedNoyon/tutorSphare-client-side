import AboutUs from "../components/About/AboutUs";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import LearAndGrouwth from "../components/LearnAndGrouwth/LearAndGrouwth";
import Offer from "../components/Offer/Offer";

import RightTutor from "../components/RightTutor/RightTutor";
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
      <section className="my-10 md:my-32 ">
        <CategoryCard></CategoryCard>
      </section>

      <section className="my-10 md:my-32 ">
        <RightTutor></RightTutor>
      </section>
      <section className="mt-12">
        <LearAndGrouwth></LearAndGrouwth>
      </section>
      <section className=" md:px-12 w-11/12 md:w-3/4  mx-auto my-10 md:my-48">
        <Offer></Offer>
      </section>
      <section className="my-10 md:my-48">
        <Testimonial></Testimonial>
      </section>
      <section className="my-10 md:my-20 dark:md:my-48 dark:bg-slate-800">
        <AboutUs></AboutUs>
      </section>
    </>
  );
};

export default Home;
