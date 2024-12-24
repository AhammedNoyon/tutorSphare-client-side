import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdSystemUpdateAlt } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  // const [allTutorial, setAllTutorials] = useState(tutorials);
  // console.log(tutorials);
  ///=========>>> load tutorials
  useEffect(() => {
    axios
      .get(`https://b10-asm11-server.vercel.app/tutorials?email=${user?.email}`)
      .then((res) => {
        setTutorials(res.data);
      });
  }, [user?.email]);
  ///=========>>> Delete Not Okay
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete not successfully and not implement await
        const { data } = axios.delete(
          `https://b10-asm11-server.vercel.app/tutorials/${id}`
        );
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });

    // tutorials.filter((tutorial) => setTutorials(tutorial._id !== id));
  };
  ///=========>>> update
  const handleUpdate = async (event, id) => {
    event.preventDefault();
    const updateInfo = new FormData(event.target);
    const updateInfoConvertObj = Object.fromEntries(updateInfo.entries());
    console.log(updateInfoConvertObj);
    const { data } = await axios.put(
      `https://b10-asm11-server.vercel.app/tutorials/${id}`,
      updateInfoConvertObj
    );
    if (data.modifiedCount === 1) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="hero min-h-[400px] mt-5">
        <div className="hero-overlay bg-[#EAF0F2] dark:bg-slate-800 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" md:max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800 dark:text-white">
              Manage and Explore Your Personalized Collection of Tutorials
              Effortlessly
            </h1>
            <p className="mb-5 text-slate-800 dark:text-gray-300">
              Access all the tutorials you’ve added in one place. Stay
              organized, review your learning materials, and continue your
              journey to mastering new skills.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-11/12 md:w-3/4 mx-auto">
        <table className="table border dark:border-slate-800 my-10 md:my-20 dark:bg-slate-800">
          {/* head */}
          <thead className="bg-gray-100 dark:bg-slate-800 dark:text-white text-xl">
            <tr>
              <th>Total</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {tutorials.map((tutorial, index) => (
              <tr key={tutorial._id}>
                <td className="dark:text-white">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tutorial?.tutorialImage}
                          alt="education tutorial"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold dark:text-white">
                        {tutorial?.CourseName}
                      </div>
                      <div className="text-sm opacity-50 dark:text-gray-100">
                        {tutorial?.tutorialLanguage}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="dark:text-white w-[200px]">
                  {tutorial?.tutorialDescription.slice(0, 50)}....
                </td>
                <td className="dark:text-white">{tutorial?.tutorialPrice}</td>
                <td className="dark:text-white">{tutorial?.review}</td>
                <th className="flex items-center gap-x-2">
                  <div>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="btn text-xl bg-primaryColor text-white"
                    >
                      <MdSystemUpdateAlt />
                    </button>
                    {/*//======>>>>modal */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box dark:bg-slate-800">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn text-xl btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">
                            ✕
                          </button>
                        </form>
                        <form
                          onSubmit={() => handleUpdate(event, tutorial._id)}
                          className="space-y-6 "
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
                                type="text"
                                name="tutorImage"
                                defaultValue={user?.photoURL}
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
                                defaultValue={tutorial?.CourseName}
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
                                defaultValue={tutorial?.tutorialLanguage}
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
                                defaultValue={tutorial?.tutorialImage}
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
                                defaultValue={tutorial?.tutorialPrice}
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
                                defaultValue={tutorial?.rating}
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
                                defaultValue={tutorial?.duration}
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
                                defaultValue={tutorial?.totalLesson}
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
                                defaultValue={tutorial?.totalStudent}
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
                                defaultValue={tutorial?.certification}
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
                              defaultValue={tutorial?.tutorialDescription}
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
                    </dialog>
                  </div>
                  <button
                    onClick={() => handleDelete(tutorial?._id)}
                    className="btn text-xl bg-error text-white "
                  >
                    <MdDeleteOutline />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
