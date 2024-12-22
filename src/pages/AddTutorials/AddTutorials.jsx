import axios from "axios";
import { useContext } from "react";
import { FaSave } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const handleAddTutorial = async (event) => {
    event.preventDefault();
    const tutorialData = new FormData(event.target);
    // console.log(tutorialData);
    const tutorialObjectData = Object.fromEntries(tutorialData.entries());
    tutorialObjectData.review = 0;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/add-tutorials",
        tutorialObjectData
      );
      if (data.insertedId) {
        return Swal.fire({
          position: "center",
          icon: "success",
          title: "Tutorial added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
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
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="tutorName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="tutorEmail"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                  placeholder="Your Email"
                />
              </div>
              {/* Image */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  image
                </label>
                <input
                  type="url"
                  name="tutorialImage"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                  placeholder="Tutorial image url"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                  placeholder="Tutorial Language"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
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
                  name="tutorialRating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                  placeholder="tutorialRating"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                rows="4"
                placeholder="Tutorial Description"
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
