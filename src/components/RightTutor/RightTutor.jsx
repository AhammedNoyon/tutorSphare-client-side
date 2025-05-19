import RightTutorSlider from "./RightTutorSlider";

const RightTutor = () => {
  return (
    <>
      <div>
        <div className="text-center w-11/12 md:w-3/4 mx-auto">
          <h3 className="text-2xl font-semibold md:text-5xl lg:text-4xl dark:text-white">
            Suggest the right tutor for you.
          </h3>
          <p className="text-lg mt-2 mb-20 dark:text-gray-300">
            With over 33,000 tutors and 2.5M+ learners, we know language
            learning.
          </p>
        </div>
        <div className=" bg-[#EAF0F2] dark:bg-slate-800 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-3/4 mx-auto">
            <div>
              <RightTutorSlider></RightTutorSlider>
            </div>
            <div>
              <h3 className="text-xl font-semibold md:text-3xl lg:text-4xl dark:text-white mt-10 lg:mt-0">
                Find the Perfect Tutor for Your Journey
              </h3>
              <p className="text-lg mt-2 mb-10 dark:text-gray-300">
                Discover the ideal tutor tailored to your needs and learning
                style. With personalized recommendations, expert guidance, and a
                wide range of specialties, achieving your goals has never been
                easier. Start your path to success today!
              </p>
              <p className="text-lg mt-2 mb-10 dark:text-gray-300">
                Unlock your full potential with the right tutor by your side.
                Whether you're looking to master a new skill or excel in
                academics, our curated suggestions connect you with top-rated
                experts ready to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightTutor;
