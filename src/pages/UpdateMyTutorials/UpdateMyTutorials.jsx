import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { GrDocumentUpdate } from "react-icons/gr";

const UpdateMyTutorials = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [myTutorials, setMyTutorials] = useState({});
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

    tutorEmail,
    tutorialDescription,
    rating,
  } = myTutorials;
  console.log(myTutorials);
  useEffect(() => {
    axios
      .get(`https://b10-asm11-server.vercel.app/tutorial?id=${id}`)
      .then((res) => {
        setMyTutorials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  ///=========>>> update
  const handleUpdate = async (event) => {
    event.preventDefault();
    const updateInfo = new FormData(event.target);
    const updateInfoConvertObj = Object.fromEntries(updateInfo.entries());
    console.log(updateInfoConvertObj);
    const { data } = await axios.put(
      `https://b10-asm11-server.vercel.app/tutorial?id=${id}`,
      updateInfoConvertObj
    );
    console.log(data);
    if (data.modifiedCount === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/my-tutorials");
    }
  };

  return (
    <div className="">
      <div className="hero min-h-[400px] lg:min-h-[500px] bg-detailsBanner mt-5 ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center ">
          <div className="md:max-w-md lg:max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
              Effortlessly Edit, Update, and Enhance Your Tutorials for Better
              Engagement
            </h1>
            <p className="mb-5">
              Keep your tutorials up-to-date and relevant with our simple
              editing tools. Modify titles, descriptions, or content to ensure
              your students always have access to the latest and most accurate
              information. Stay ahead and enhance your teaching materials
              effortlessly.
            </p>
          </div>
        </div>
      </div>
      <form
        onSubmit={() => handleUpdate(event)}
        className="space-y-6 w-11/12 md:w-3/5 mx-auto my-10 md:my-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* TutorName */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Tutor Name
            </label>
            <input
              type="text"
              name="tutorName"
              defaultValue={tutorName}
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
              defaultValue={tutorEmail}
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
              type="text"
              name="tutorImage"
              defaultValue={tutorImage}
              readOnly
              disabled
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
              defaultValue={CourseName}
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
              defaultValue={tutorialLanguage}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-gray-300"
              placeholder="Tutorial Language"
            />
          </div>
          {/* TutorialImage */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Tutorial image
            </label>
            <input
              type="text"
              name="tutorialImage"
              defaultValue={tutorialImage}
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
              defaultValue={tutorialPrice}
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
              defaultValue={rating}
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
              defaultValue={duration}
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
              defaultValue={totalLesson}
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
              defaultValue={totalStudent}
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
              defaultValue={certification}
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
            defaultValue={tutorialDescription}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800 dark:text-gray-300"
            rows="4"
            placeholder="Tutorial Description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primaryColor/60 to-primaryColor/70 text-white py-2  rounded-md shadow-lg hover:bg-primaryColor  transition duration-300 flex justify-center items-center text-xl"
          >
            <GrDocumentUpdate className="mr-2" />
            <span>Update</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyTutorials;
