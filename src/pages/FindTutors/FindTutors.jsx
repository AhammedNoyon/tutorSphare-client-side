import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    // const { data } = axios.get("http://localhost:5000/tutorials");
    // console.log(data);
    axios.get("http://localhost:5000/tutorials").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h3>Find Tutors</h3>
      <div className="group relative w-full max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 dark:bg-[#505050] flex gap-4">
        {/* Image Section */}
        <div className="relative overflow-hidden ">
          <img
            src="image"
            alt="Card"
            className="w-80 h-80 mx-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold"></p>
          </div>
        </div>
        {/* Content Section */}
        <div className="p-5 flex flex-col ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-active transition-colors duration-300 dark:text-white"></h2>
          <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
            ...
          </p>
          <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 dark:text-white">
            description...
          </p>
          <div className="flex justify-between text-sm text-gray-500 mb-2 dark:text-white">
            <p>Price : </p>
            <p>Rating : </p>
          </div>

          <div className="text-sm flex justify-between text-gray-500 dark:text-white">
            <p>Category : </p>
            <p>Stock: </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pr-5 md:-mt-5 lg:mt-10">
          <button className="mb-3 ml-3 flex justify-center items-center  gap-2 px-4 py-2   rounded-full shadow-md  transition-all duration-300 bg-naBarBg text-white">
            Learn More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
