import aboutImg1 from "../../assets/banner/banner2.jpg";
import aboutImg2 from "../../assets/banner/banner5.jpg";
const PopularCourse = () => {
  return (
    <>
      <section className=" py-16 w-11/12 md:w-3/4 mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-xs font-bold text-gray-600 tracking-wide uppercase">
            About Us
          </h2>
          <h1 className="text-4xl font-extrabold leading-snug">
            We Provide Best <span className="text-primaryColor">Education</span>{" "}
            Services For You
          </h1>
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            <button className="text-error border-b-2 border-error">
              About EduBlink
            </button>
            <button>Our Mission</button>
            <button>Our Vision</button>
          </div>
          <p className="text-gray-500">
            Magna aliqua enim minim veniam quis nostrud exercitation ullamco
            laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed
            do eius tempor incididunt labore.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="text-primaryColor mr-2">✔</span> Education award
              achieved
            </li>
            <li className="flex items-center text-gray-700">
              <span className="text-primaryColor mr-2">✔</span> Available online
              courses
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center  space-x-4 lg:relative">
          <div className="w-40 h-40 md:w-52 md:h-52 lg:w-3/5 lg:h-3/5 overflow-hidden rounded-lg lg:mr-10">
            <img
              src={aboutImg1}
              alt="Student 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-lg lg:absolute lg:-bottom-20 lg:right-10">
            <img
              src={aboutImg2}
              alt="Student 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourse;
