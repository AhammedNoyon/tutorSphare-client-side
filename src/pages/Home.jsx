import Slider from "../components/Slider/Slider";
import Status from "../components/Status/Status";

const Home = () => {
  return (
    <>
      <section>
        <Slider></Slider>
      </section>
      <section className="bg-primaryColor dark:bg-[#111627]">
        <Status></Status>
      </section>
      <section>category</section>
      <section>one more</section>
      <section>one more</section>
    </>
  );
};

export default Home;
