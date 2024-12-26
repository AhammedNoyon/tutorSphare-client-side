import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  // console.log(location.state);
  const [categoryTutorials, setCategoryTutorials] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://b10-asm11-server.vercel.app/tutorials?category=${location?.state}`
      )
      .then((res) => {
        setCategoryTutorials(res.data);
      });
  }, [location?.state]);
  console.log(categoryTutorials);
  return (
    <div>
      <div className="hero min-h-[400px] mt-5">
        <div className="hero-overlay bg-[#EAF0F2] dark:bg-slate-800 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" md:max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white">
              Explore a Wide Range of Categories to Find Your Perfect Online
              Tutor
            </h1>
            <p className="mb-5 text-slate-800 dark:text-gray-300">
              Discover a diverse range of tutoring options tailored to meet your
              learning goals. Whether you're looking to master a new language,
              excel in academics, or develop professional skills, our
              experienced tutors are here to guide you. Browse through our
              categories and find the perfect match for your needs
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-10 md:mt-20 w-11/12 md:w-3/4 mx-auto mb-8  dark:text-white flex items-center gap-2">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Connect with Category Tutors
        </span>{" "}
        <span className="bg-primaryColor px-2 py-1 text-lg font-bold flex justify-center items-center rounded-full text-white">
          ({categoryTutorials.length})
        </span>
      </h3>
      <div className="w-11/12 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-20">
        {categoryTutorials.map((categoryTutorial) => (
          <div
            key={categoryTutorial._id}
            className="group relative w-full max-w-7xl bg-white dark:bg-slate-800  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden border-b dark:border-none">
              <img
                src={categoryTutorial?.tutorialImage}
                alt="Card"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{category}..!</p>
            </div> */}
            </div>
            {/* Content Section */}
            <div className="dark:glass pb-3">
              <div className="p-5 md:h-[150px]  flex flex-col">
                <div className="flex gap-2 items-center ">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-active transition-colors duration-300 dark:text-white">
                    Course : {categoryTutorial?.CourseName}
                  </h2>
                  <div className="bg-error px-3 rounded-3xl flex justify-center items-center text-white -mt-5 py-2 dark:bg-slate-800">
                    ${categoryTutorial?.tutorialPrice}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
                  Language : {categoryTutorial?.tutorialLanguage}
                </p>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
                  Instructor : {categoryTutorial?.tutorName}
                </p>
              </div>
              <Link to={`/tutor/${categoryTutorial?._id}`}>
                <button className=" ml-3 flex items-center gap-2 px-4 py-2  rounded-full shadow-md  transition-all duration-300  dark:mt-5 dark:text-white bg-primaryColor text-white">
                  <p className="">View Details </p> <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
