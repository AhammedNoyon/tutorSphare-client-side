import banner1 from "../../assets/banner/banner1.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.jpg";
import banner5 from "../../assets/banner/banner5.jpg";

const Slider = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full bg-[#EAF0F2]">
          <div className="relative  py-16">
            <div className="w-11/12 md:w-3/4 h-[500px] mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-12 px-6">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  Get <span className="text-pink-500">2500+</span> Best Online
                  Courses <br /> From EduBlink
                </h1>
                <p className="text-gray-500 mt-4">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>
                <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600">
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
                <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
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
                    <p className="text-gray-700 font-medium">Instructor</p>
                    <p className="text-pink-500 font-bold text-sm">
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
        <div id="slide3" className="carousel-item relative w-full">
          <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-6 md:py-20 md:px-12 lg:flex lg:items-center">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-800 leading-snug md:text-5xl">
                The Best Program to Enroll for Exchange
              </h1>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit.
              </p>
              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
                Find courses →
              </button>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-pink-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25a3.75 3.75 0 10-7.5 0V9m7.5 0H6.75m9 0v9.75a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25V9m3.75 3v2.25"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Online Support</p>
                  <p className="text-pink-500 font-medium">+012 (345) 6789</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img
                  src="https://via.placeholder.com/350x350" // Replace this with the main image URL
                  alt="Main Student"
                  className="rounded-lg shadow-lg mx-auto lg:mx-0"
                />
              </div>
              <div className="absolute top-[-50px] left-[50px] hidden lg:block">
                <img
                  src="https://via.placeholder.com/200x200" // Replace with the top-left image URL
                  alt="Student"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-[-50px] right-[50px] hidden lg:block">
                <img
                  src="https://via.placeholder.com/200x200" // Replace with the bottom-right image URL
                  alt="Student"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
