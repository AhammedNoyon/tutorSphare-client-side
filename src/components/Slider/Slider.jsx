import banner1 from "../../assets/banner/banner1.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.jpg";
import banner5 from "../../assets/banner/banner5.jpg";

const Slider = () => {
  return (
    <>
      <div className="carousel w-full mt-5">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-[#EAF0F2] dark:bg-slate-800"
        >
          <div className="relative  pt-16">
            <div className="w-11/12 md:w-3/4 h-[500px] mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-12 px-6">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight dark:text-white">
                  Get <span className="text-error">2500+</span> Best Online
                  Courses <br /> From EduBlink
                </h1>
                <p className="text-gray-500 mt-4 dark:text-gray-400">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>
                <button className="mt-6 px-6 py-3 bg-primaryColor/80 text-white font-semibold rounded-lg shadow-lg hover:bg-primaryColor">
                  Find courses →
                </button>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 relative flex justify-center">
                {/* Main Image */}
                <img
                  src={banner1}
                  alt=""
                  className="w-80 md:w-96 lg:w-full  rounded-lg "
                />
                {/* Badge Section */}
                <div className="absolute bottom-8 right-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img
                      src="https://via.placeholder.com/50x50" // Replace with instructor images
                      alt="Instructor 1"
                      className="w-10 h-10 rounded-full border border-gray-200"
                    />
                    <img
                      src="https://via.placeholder.com/50x50" // Replace with instructor images
                      alt="Instructor 2"
                      className="w-10 h-10 rounded-full border border-gray-200"
                    />
                    <img
                      src="https://via.placeholder.com/50x50" // Replace with instructor images
                      alt="Instructor 3"
                      className="w-10 h-10 rounded-full border border-gray-200"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium dark:text-white">
                      Instructor
                    </p>
                    <p className="text-error font-bold text-sm">
                      200+ Instructors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero  bg-banner2">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md lg:max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Explore Unlimited Learning Opportunities with Us
                </h1>
                <p className="mb-5">
                  Join thousands of learners and gain access to expertly crafted
                  courses across a wide range of topics. Start your journey
                  towards knowledge and growth today!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full bg-[#EAF0F2] dark:bg-slate-800"
        >
          <section className="relative  py-12  md:py-0 md:pt-10 lg:flex lg:items-center w-11/12 md:w-3/4 mx-auto">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 leading-snug md:text-5xl dark:text-white">
                The Best Program to Enroll for Exchange
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <button className="mt-6 bg-primaryColor/40 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primaryColor transition dark:bg-primaryColor">
                Find courses →
              </button>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-white dark:bg-slate-600 p-4 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-error"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25a3.75 3.75 0 10-7.5 0V9m7.5 0H6.75m9 0v9.75a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25V9m3.75 3v2.25"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-300 font-bold">
                    Online Support
                  </p>
                  <p className="text-error font-medium">+012 (345) 6789</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="relative z-10 lg:w-[350px] lg:h-[350px]">
                <img
                  src={banner3}
                  alt="Main Student"
                  className="rounded-lg shadow-lg mx-auto lg:mx-0 lg:ml-24 mt-20 lg:mt-14"
                />
              </div>
              <div className="absolute top-[-50px] left-[50px] hidden lg:block w-[220px] h-[220px]">
                <img
                  src={banner4}
                  alt="Student"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-[-50px] right-[50px] hidden lg:block w-[220px] h-[220px]">
                <img
                  src={banner5}
                  alt="Student"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          <div className="absolute left-5 right-5 top-[53%] md:top-[45%] lg:top-1/2 flex -translate-y-1/2 transform justify-between ">
            <a
              href="#slide2"
              className="btn btn-circle dark:bg-slate-600 dark:border-none dark:text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle dark:bg-slate-600 dark dark:border-none dark:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
