import { useEffect, useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate/useAxiosPrivate";

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  const axiosPrivateInstance = useAxiosPrivate();
  useEffect(() => {
    // const { data } = axios.get("http://localhost:5000/tutorials");
    // console.log(data);
    axiosPrivateInstance.get("/tutorials").then((res) => {
      setTutorials(res.data);
    });
  }, [axiosPrivateInstance]);
  return (
    <div>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 md:w-3/4 mx-auto">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial._id}
            className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col lg:flex-row items-start"
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
            <div className="w-full lg:w-2/3 p-4">
              {/* Price */}
              <p className="text-red-500 font-bold text-lg">
                ${tutorial?.tutorialPrice}
              </p>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-justify">
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
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.292 3.946a1 1 0 00.95.69h4.14a1 1 0 01.592 1.806l-3.36 2.44a1 1 0 00-.364 1.118l1.293 3.947a1 1 0 01-1.537 1.118L10 13.011l-3.365 2.444a1 1 0 01-1.537-1.118l1.293-3.947a1 1 0 00-.364-1.118l-3.36-2.44a1 1 0 01.592-1.806h4.14a1 1 0 00.95-.69l1.292-3.946z" />
                    </svg>
                  ))}
                <span className="text-gray-600 text-sm ml-2">
                  {tutorial?.tutorialRating}
                </span>
              </div>
              {/* Lessons and Students */}
              <div className="flex items-center justify-between text-gray-600 text-sm">
                <div>
                  <div className="w-16 h-16 rounded-full border-2">
                    <img src={tutorial?.tutorImage} alt="tutor" />
                  </div>
                  <div className="flex items-center text-xl font-bold my-2">
                    <FaUser className="mr-1" />
                    {tutorial?.tutorName}
                  </div>
                </div>
                <div className="flex items-center text-lg">
                  <FaEye className="mr-1" />
                  <span>{tutorial?.review}</span>
                </div>
              </div>
              <Link to="/tutor/:details" state={tutorial}>
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
