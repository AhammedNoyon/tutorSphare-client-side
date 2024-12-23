import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [allBooked, setAllBooked] = useState([]);
  // const location = useLocation();
  // const tutorId = location.state;
  // console.log(tutorId);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-booked?email=${user?.email}`)
      .then((res) => {
        setAllBooked(res.data);
      });
  }, [user?.email]);
  ///=========>>>>> review update
  // const handleReviewUpdate = async () => {
  //   const { data } = await axios.post(
  //     "http://localhost:5000/my-booked/update",
  //     tutorId
  //   );
  //   console.log(data);
  // };
  return (
    <div>
      <div className="hero min-h-[400px] lg:min-h-[500px] bg-bookedBanner mt-5 ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="md:max-w-md lg:max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              Explore and Manage All Your Booked Tutorials in One Convenient
              Location
            </h1>
            <p className="mb-5">
              Keep track of the tutorials you’ve booked and access them anytime
              to continue your learning journey. Stay organized and unlock new
              opportunities to grow.
            </p>
          </div>
        </div>
      </div>
      <h3 className="mt-10 md:mt-20 w-11/12 md:w-3/4 mx-auto mb-8  dark:text-white flex items-center gap-2">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          My Booked Tutors
        </span>{" "}
        <span className="bg-primaryColor px-2 py-1 text-lg font-bold flex justify-center items-center rounded-full text-white">
          ({allBooked.length})
        </span>
      </h3>
      <div className="w-11/12 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-20">
        {allBooked.map((booked) => (
          <div
            key={booked._id}
            className="group relative w-full max-w-7xl bg-white dark:bg-slate-800  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden border-b dark:border-none">
              <img
                src={booked?.image}
                alt="Card"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{category}..!</p>
            </div> */}
            </div>
            {/* Content Section */}
            <div className="p-5 md:h-[100px] dark:glass flex flex-col">
              <div className="flex gap-2 items-center ">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-active transition-colors duration-300 dark:text-white">
                  Language: {booked?.language}
                </h2>
                <div className="bg-error px-3 rounded-3xl flex justify-center items-center text-white -mt-5 py-2 dark:bg-slate-800">
                  ${booked?.price}
                </div>
              </div>
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
                Instructor : {booked?.tutorName}
              </p>
            </div>
            <button
              // onClick={handleReviewUpdate}
              className="mb-3 ml-3 flex items-center gap-2 px-4 py-2  rounded-full shadow-md  transition-all duration-300 glass dark:mt-5 dark:text-white"
            >
              <Link>Review </Link> <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
