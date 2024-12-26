import { useContext, useEffect, useState } from "react";
import {
  FaClock,
  FaBook,
  FaUser,
  FaGlobe,
  FaCertificate,
} from "react-icons/fa";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { SiNamebase } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";
const TutorialDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  console.log(id);

  const navigate = useNavigate();
  const [tutorialData, setTutorialData] = useState({});
  const {
    tutorialImage,
    CourseName,
    duration,
    totalLesson,
    totalStudent,
    review,
    tutorialLanguage,
    certification,
    tutorialPrice,
    tutorImage,
    tutorName,
    tutorialDescription,
  } = tutorialData;

  useEffect(() => {
    axios
      .get(`https://b10-asm11-server.vercel.app/tutorial?id=${id}`)
      .then((res) => {
        setTutorialData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(tutorialData);
  ///=======>>> Booked tutor
  const handleBooked = async () => {
    const tutorId = tutorialData?._id;
    const image = tutorialData?.tutorialImage;
    const CourseName = tutorialData?.CourseName;
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
      CourseName,
      tutorEmail,
      price,
      bookedUserEmail,
      bookedUserName,
      tutorName,
    };
    try {
      const { data } = await axios.post(
        "https://b10-asm11-server.vercel.app/my-booked",
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
        navigate("/my-booked-tutors", { state: { tutorId } });
        // return <Navigate to="/my-booked-tutors" state={tutorId}></Navigate>;
      }
    } catch (err) {
      // console.log(err?.response?.data);
      Swal.fire({
        position: "center",
        icon: "error",
        title: err?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="hero min-h-[400px] lg:min-h-[500px] bg-detailsBanner ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="md:max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              Explore Comprehensive Details to Make Informed and Confident
              Decisions
            </h1>
            <p className="mb-5">
              Dive deeper into the specifics and uncover valuable insights
              tailored to your interests. Get all the information you need to
              take the next step with confidence.
            </p>
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
                src={tutorialImage}
                alt=""
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
              Course Includes:
            </h2>
            <div className="space-y-3 text-sm md:text-base text-gray-600">
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center ">
                  <SiNamebase className="mr-2 text-gray-500 dark:text-gray-300" />{" "}
                  Course :
                </span>
                <span>{CourseName}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaClock className="mr-2 text-gray-500" /> Duration:
                </span>
                <span>{duration}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaBook className="mr-2 text-gray-500" /> Lessons:
                </span>
                <span>{totalLesson}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaUser className="mr-2 text-gray-500" /> Students:
                </span>
                <span>{totalStudent}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <MdOutlineReviews className="mr-2 text-gray-500" /> Review :
                </span>
                <span>{review}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaGlobe className="mr-2 text-gray-500" /> Language:
                </span>
                <span>{tutorialLanguage}</span>
              </h3>
              <h3 className="flex items-center justify-between dark:text-gray-300">
                <span className="flex items-center">
                  <FaCertificate className="mr-2 text-gray-500" />{" "}
                  Certification:
                </span>
                <span>{certification}</span>
              </h3>
            </div>
            <div className="mt-6">
              <p className="text-2xl text-error font-bold mb-2">
                ${tutorialPrice}
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
              <img src={tutorImage} alt="" />
            </div>
            <h3 className="text-3xl font-bold dark:text-gray-300">
              {tutorName}
            </h3>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Course Description
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed w-full md:w-2/3 text-justify dark:text-gray-300">
            {tutorialDescription}
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
