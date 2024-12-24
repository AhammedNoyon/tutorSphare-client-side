import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// import useAxiosPrivate from "../../hooks/useAxiosPrivate/useAxiosPrivate";

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  const [search, setSearch] = useState("");
  // const axiosPrivateInstance = useAxiosPrivate();
  useEffect(() => {
    // const { data } = axios.get("http://localhost:5000/tutorials");
    // console.log(data);
    axios
      .get(`http://localhost:5000/tutorials?search=${search}`)
      .then((res) => {
        setTutorials(res.data);
      });
  }, [search]);
  // console.log(search);
  return (
    <div>
      <div className="hero min-h-[400px] lg:min-h-[500px] bg-findTutorsBanner mt-5 ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Your Perfect Tutor
            </h1>
            <p className="mb-5">
              Browse through a wide range of expert tutors across various
              subjects and find the perfect match to help you achieve your
              learning goals. et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-3/4 mx-auto mt-10 md:mt-20">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold dark:text-white mb-3 md:mb-0">
          Connect with Experienced Tutors
        </h3>
        <div className="input input-bordered flex items-center gap-2 w-fit dark:bg-gray-400 dark:border-gray-300">
          <input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            className="grow "
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6 opacity-70 dark:text-white "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 md:w-3/4 mx-auto mb-10 md:mb-20 mt-10">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-none flex flex-col lg:flex-row items-start "
          >
            {/* Image Section */}
            <div className="lg:w-1/3">
              <img
                src={tutorial?.tutorialImage}
                alt="Course Thumbnail"
                className="w-full h-full object-cover rounded-l-lg  "
              />
              {/* Duration Badge
              <div className="absolute bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center">
                <FaClock className="mr-1" />
                12 Weeks
              </div> */}
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/3 p-4 flex flex-col">
              {/* Price */}
              <p className="text-red-500 font-bold text-lg">
                ${tutorial?.tutorialPrice}
              </p>
              {/* Title */}
              <h3 className="text-2xl font-semibold dark:text-white my-2">
                {tutorial?.CourseName}
              </h3>
              {/* description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-justify dark:text-white">
                {tutorial?.tutorialDescription.slice(0, 200)}....
              </h3>
              {/* Ratings */}
              <div className="flex items-center text-yellow-500 mb-3">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.292 3.946a1 1 0 00.95.69h4.14a1 1 0 01.592 1.806l-3.36 2.44a1 1 0 00-.364 1.118l1.293 3.947a1 1 0 01-1.537 1.118L10 13.011l-3.365 2.444a1 1 0 01-1.537-1.118l1.293-3.947a1 1 0 00-.364-1.118l-3.36-2.44a1 1 0 01.592-1.806h4.14a1 1 0 00.95-.69l1.292-3.946z" />
                    </svg>
                  ))}
                <span className="text-gray-600 text-sm ml-2  dark:text-white">
                  {tutorial?.tutorialRating}
                </span>
              </div>
              {/* Lessons and Students */}
              <div className="flex items-center justify-between text-gray-600 text-sm mb-5">
                <div>
                  <div className="w-16 h-16 rounded-full border-2">
                    <img src={tutorial?.tutorImage} alt="tutor" />
                  </div>
                  <div className="flex items-center text-xl font-bold my-2 dark:text-white">
                    <FaUser className="mr-1" />
                    {tutorial?.tutorName}
                  </div>
                </div>
                <div className="flex items-center text-lg">
                  <FaEye className="mr-1 dark:text-gray-300" />
                  <span className="text-gray-300">{tutorial?.review}</span>
                </div>
              </div>
              <Link to={`/tutor/${tutorial?._id}`}>
                <button className="w-full bg-gradient-to-r from-primaryColor/60 to-primaryColor/70 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primaryColor  transition duration-300 ">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
