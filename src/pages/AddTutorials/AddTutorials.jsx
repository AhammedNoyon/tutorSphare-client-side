import axios from "axios";
import { useContext } from "react";
import { FaSave } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddTutorial = async (event) => {
    event.preventDefault();
    const tutorialData = new FormData(event.target);
    // console.log(tutorialData);
    const tutorialObjectData = Object.fromEntries(tutorialData.entries());
    tutorialObjectData.review = 0;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/tutorials",
        tutorialObjectData
      );
      if (data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tutorial added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-tutorials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="hero min-h-[400px] mt-5">
        <div className="hero-overlay bg-[#EAF0F2] dark:bg-slate-800 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" md:max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white">
              Empower Students by Sharing Your Knowledge and Expertise
            </h1>
            <p className="mb-5 text-slate-800 dark:text-gray-300">
              Join our platform and help students achieve their goals by sharing
              your knowledge and skills. Start your journey as a tutor today!
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  w-11/12 md:w-3/4 mx-auto my-10 md:my-20">
        {/* Left Section */}
        <div className=" lg:pr-10">
          <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-6 text-center lg:text-start">
            Add a New Tutorial
          </h1>
          <p className=" text-gray-600 mb-8 dark:text-gray-400 text-justify md:text-justify text-lg">
            Use this form to add a new tutorial to the platform. Provide a
            meaningful title and a brief description to give users a clear idea
            of what your tutorial is about. Make sure to upload a representative
            image and specify the language of the tutorial. Set a fair price to
            attract users while reflecting the value of the content. In the
            detailed description, explain the tutorial's content, structure, and
            what learners will achieve by completing it. Your tutorial will
            start with a default review score of 0, and users will be able to
            rate it after viewing. Once submitted, your tutorial will be listed
            for learners worldwide to access and benefit from.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2">
          <form onSubmit={handleAddTutorial} className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* TutorName */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Tutor Name
                </label>
                <input
                  type="text"
                  name="tutorName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Your Name"
                />
              </div>

              {/* tutorEmail */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  tutor Email
                </label>
                <input
                  type="email"
                  name="tutorEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Your Email"
                />
              </div>
              {/* TutorImage */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Tutor image
                </label>
                <input
                  type="url"
                  name="tutorImage"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Tutor image url"
                />
              </div>
              {/* courseName */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Course Name
                </label>
                <input
                  type="text"
                  name="CourseName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Course Name"
                />
              </div>
              {/* Language */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Language
                </label>
                <input
                  type="text"
                  name="tutorialLanguage"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Tutorial Language"
                />
              </div>
              {/* TutorialImage */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Tutorial image
                </label>
                <input
                  type="url"
                  name="tutorialImage"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white "
                  placeholder="Tutorial image url"
                />
              </div>
              {/* Price */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  name="tutorialPrice"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Price"
                />
              </div>
              {/* Rating */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="tutorialRating"
                />
              </div>
              {/* Duration */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Also mention Weeks/month/years"
                />
              </div>
              {/* total Lesson */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Total Lesson
                </label>
                <input
                  type="number"
                  name="totalLesson"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Total Lesson"
                />
              </div>
              {/* Total student */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Total Student
                </label>
                <input
                  type="number"
                  name="totalStudent"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="How many are there now?"
                />
              </div>
              {/* certification */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Certification
                </label>
                <input
                  type="text"
                  name="certification"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                  placeholder="Yes or No"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Description
              </label>
              <textarea
                name="tutorialDescription"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-white"
                rows="4"
                placeholder="Tutorial Description"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primaryColor/60 to-primaryColor/70 text-white py-2 px-4 rounded-md shadow-lg hover:bg-primaryColor  transition duration-300"
              >
                <FaSave className="mr-2 inline" />
                Submit Tutorial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
