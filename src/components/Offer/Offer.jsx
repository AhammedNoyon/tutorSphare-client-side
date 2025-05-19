import { AiOutlineAim } from "react-icons/ai";
import offerImg from "../../assets/banner/banner4.jpg";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa6";
import { LuMonitor } from "react-icons/lu";
const Offer = () => {
  return (
    <>
      <div className="lg:flex justify-between gap-10">
        <div className="">
          <img
            className="w-full mx-auto rounded-xl mb-10 lg:mb-0"
            src={offerImg}
            alt="offerImg"
          />
        </div>
        <div>
          <small className="text-primaryColor text-3xl ">Why choose us</small>
          <h2 className="text-6xl font-medium dark:text-white mt-8 mb-4">
            We Offer You a Brighter Future
          </h2>
          <p className="dark:text-white text-xl">
            Welcome to the exclusive Offer Section of TutorSphare! Here, you'll
            find amazing deals and discounts to make your learning journey more
            affordable and effective. Whether you're looking for your favorite
            courses, skill development programs, or personalized tutoring
            services, we have the perfect offers for you. Don't miss out on this
            limited-time opportunity—grab your offer today and take a step
            closer to your goals!
          </p>
          <div className="flex  gap-5 items-center dark:text-white mb-3 mt-8">
            <div className="text-xl bg-primaryColor p-2 rounded-full">
              <AiOutlineAim />
            </div>
            <p className="text-xl font-semibold">
              Obtaining Course Certificate
            </p>
          </div>
          <div className="flex  gap-5 items-center dark:text-white mb-3 ">
            <div className="text-xl bg-primaryColor p-2 rounded-full">
              <RiShoppingBag4Fill />
            </div>
            <p className="text-xl font-semibold">Having Flexible Schedule</p>
          </div>
          <div className="flex  gap-5 items-center dark:text-white mb-3 ">
            <div className="text-xl bg-primaryColor p-2 rounded-full">
              <FaGraduationCap />
            </div>
            <p className="text-xl font-semibold">Programming for Classes</p>
          </div>
          <div className="flex  gap-5 items-center dark:text-white mb-3 ">
            <div className="text-xl bg-primaryColor p-2 rounded-full">
              <LuMonitor />
            </div>
            <p className="text-xl font-semibold">
              Access Our Courses Everywhere
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
