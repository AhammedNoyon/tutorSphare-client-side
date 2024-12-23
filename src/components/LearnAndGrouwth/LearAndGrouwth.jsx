import Lottie from "lottie-react";
import learnAnimation from "../../assets/lottie/learn/Animation - 1734986535125.json";
import growthAnimation from "../../assets/lottie/growth/Animation - 1734981025616.json";

const LearAndGrouwth = () => {
  return (
    <section className="md:px-12 w-11/12 md:w-3/4  mx-auto mt-10 md:mt-20">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl dark:text-white">
          Unlock Your Potential with{" "}
          <span className="text-primaryColor/70">Learning</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Start your journey to success with resources designed to help you grow
          and achieve your dreams.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 items-center lg:w-8/12 mx-auto">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            Learn Anytime, Anywhere
          </h3>
          <p className="mt-4 text-gray-600 text-justify dark:text-gray-300">
            Access a vast library of courses and resources to learn at your own
            pace, whether you're at home or on the go.
          </p>
          <p className="mt-2 text-gray-600 text-justify dark:text-gray-300">
            Whether you're a professional looking to upskill or a student
            exploring new fields, our platform provides personalized paths to
            meet your unique goals.
          </p>
        </div>
        <div className="lg:w-[300px] mx-auto ">
          <Lottie
            className=""
            animationData={learnAnimation}
            loop={true}
          ></Lottie>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 items-center  lg:w-8/12 mx-auto ">
        <div className="lg:w-[300px] mx-auto order-2 md:order-1">
          <Lottie animationData={growthAnimation} loop={true}></Lottie>
        </div>
        <div className=" text-center md:text-right order-1 md:order-2">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            Grow with Expert Guidance
          </h3>
          <p className="mt-4 text-gray-600 text-justify dark:text-gray-300">
            Learn from industry experts with years of experience to guide you on
            the right path to success. providing you with comprehensive learning
            experiences that inspire and motivate.
          </p>
          <p className="mt-2 text-gray-600 text-justify dark:text-gray-300">
            Our experts bring a wealth of knowledge from diverse industries,
            providing you with comprehensive learning experiences that inspire
            and motivate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearAndGrouwth;
