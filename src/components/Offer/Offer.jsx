import offerImg from "../../assets/banner/banner4.jpg";
const Offer = () => {
  return (
    <>
      <div className="md:px-12 w-11/12 md:w-3/4  mx-auto mt-10 md:mt-20 flex justify-between gap-10">
        <div className="">
          <img
            className="w-full mx-auto rounded-xl"
            src={offerImg}
            alt="offerImg"
          />
        </div>
        <div>
          <small className="text-primaryColor text-3xl">Why choose us</small>
          <h2 className="text-6xl font-medium dark:text-white">
            We Offer You a Brighter Future
          </h2>
          <p>
            Welcome to the exclusive Offer Section of TutorSphare! Here, you'll
            find amazing deals and discounts to make your learning journey more
            affordable and effective. Whether you're looking for your favorite
            courses, skill development programs, or personalized tutoring
            services, we have the perfect offers for you. Don't miss out on this
            limited-time opportunity—grab your offer today and take a step
            closer to your goals!
          </p>
        </div>
      </div>
    </>
  );
};

export default Offer;
