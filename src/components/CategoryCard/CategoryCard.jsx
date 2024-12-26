import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
const CategoryCard = () => {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    axios
      .get("https://b10-asm11-server.vercel.app/tutorials/category")
      .then((res) => {
        setTutorials(res.data);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <div className="py-16 bg-white dark:bg-[#111627] text-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">
          Top Categories
        </h2>
        <p className="text-gray-500 mb-8 dark:text-gray-300">
          Consequat adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {tutorials.slice(0, 12).map((tutorial) => (
            <Link
              to={`/find-tutor/${tutorial?._id}`}
              state={tutorial?.CourseName}
              key={tutorial._id}
              className={`p-6 rounded-lg shadow-md flex gap-4 items-center  justify-center bg-gradient-to-r from-primaryColor/20 to-error/20 dark:bg-gradient-to-r dark:from-slate-600 dark:to-slate-800 dark:text-white`}
            >
              <div className={`text-3xl   `}>
                <TbCategory />
              </div>
              <h3 className="text-lg  lg:text-3xl ">
                {tutorial?.CourseName} tutors
              </h3>
              <div className={`text-3xl mr-4 `}>
                <FaArrowRightToBracket />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
