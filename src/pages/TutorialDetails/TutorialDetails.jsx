import { useContext } from "react";
import {
  FaStar,
  FaClock,
  FaBook,
  FaUser,
  FaGlobe,
  FaCertificate,
} from "react-icons/fa";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { SiNamebase } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const TutorialDetails = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const tutorialData = location.state;
  const navigate = useNavigate();
  ///=======>>> Booked tutor
  const handleBooked = async () => {
    const tutorId = tutorialData?._id;
    const image = tutorialData?.tutorialImage;
    const language = tutorialData?.tutorialLanguage;
    const price = tutorialData?.tutorialPrice;
    const tutorEmail = tutorialData?.tutorEmail;
    const bookedUserEmail = user?.email;
    const bookedUserName = user?.displayName;
    const tutorName = tutorialData?.tutorName;

    if (user?.email === tutorEmail) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Booked Not Permitted For Tutor",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const bookedTutorInfo = {
      tutorId,
      image,
      language,
      tutorEmail,
      price,
      bookedUserEmail,
      bookedUserName,
      tutorName,
    };
    const { data } = await axios.post(
      "http://localhost:5000/my-booked",
      bookedTutorInfo
    );
    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Booked successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/my-booked-tutors");
    }
  };

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
      <div className="w-11/12 md:w-3/4 lg:max-w-7xl mx-auto my-10 md:my-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              Empower Your Future Through Education and Knowledge
            </h1>

            {/* tutorial image */}
            <div className="h-[400px]">
              <img
                className="w-full md:h-[400px] object-cover "
                src={tutorialData?.tutorialImage}
                alt=""
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
              Course Includes:
            </h2>
            <ul className="space-y-3 text-sm md:text-base text-gray-600">
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center ">
                  <SiNamebase className="mr-2 text-gray-500 dark:text-gray-300" />{" "}
                  Name:
                </span>
                <span>*******</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaClock className="mr-2 text-gray-500" /> Duration:
                </span>
                <span>15 weeks</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaBook className="mr-2 text-gray-500" /> Lessons:
                </span>
                <span>11</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaUser className="mr-2 text-gray-500" /> Students:
                </span>
                <span>227</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <MdOutlineReviews className="mr-2 text-gray-500" /> Review :
                </span>
                <span>{tutorialData.review}</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaGlobe className="mr-2 text-gray-500" /> Language:
                </span>
                <span>{tutorialData?.tutorialLanguage}</span>
              </li>
              <li className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaCertificate className="mr-2 text-gray-500" />{" "}
                  Certification:
                </span>
                <span>Yes</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-2xl text-error font-bold mb-2">
                ${tutorialData?.tutorialPrice}
              </p>
              <button
                onClick={handleBooked}
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
              >
                Book Now
              </button>
            </div>
            <div className="mt-6 ">
              <p className="text-gray-600 mb-3 dark:text-gray-300">Share On:</p>
              <div className="flex space-x-4 text-gray-500">
                <FiFacebook className="w-5 h-5 cursor-pointer hover:text-teal-500 transition dark:text-gray-300" />
                <FiTwitter className="w-5 h-5 cursor-pointer hover:text-teal-500 transition dark:text-gray-300" />
                <FiLinkedin className="w-5 h-5 cursor-pointer hover:text-teal-500 transition dark:text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
              Instructor Info{" "}
            </h3>
            <div className="w-16 h-16 rounded-full border-2 flex justify-center items-center mb-2">
              tutor
            </div>
            <h3 className="text-3xl font-bold dark:text-gray-300">
              {tutorialData?.tutorName}
            </h3>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Course Description
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed w-full md:w-2/3 text-justify dark:text-gray-300">
            {tutorialData?.tutorialDescription}
          </p>

          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            What You'll Learn?
          </h3>
          <ul className="space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
            <li>✔ How to acquire new skills easily and effectively.</li>
            <li>
              ✔ Strategies to enhance your abilities using modern technology.
            </li>
            <li>
              ✔ Essential knowledge to become self-reliant and productive.
            </li>
            <li>✔ Skills necessary to face any challenges in life.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetails;
