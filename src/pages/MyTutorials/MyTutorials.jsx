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
                        {tutorial?.tutorName}
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
                            {/* Name */}
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                defaultValue={tutorial?.tutorName}
                                readOnly
                                disabled
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
                                name="email"
                                defaultValue={tutorial?.tutorName}
                                readOnly
                                disabled
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
                                defaultValue={tutorial?.tutorialImage}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                                placeholder="Tutorial photo url"
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
                                defaultValue={tutorial?.tutorialPrice}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                                placeholder="Price"
                              />
                            </div>
                            {/* Review */}
                            <div className="space-y-2">
                              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                                Review
                              </label>
                              <input
                                type="number"
                                name="review"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
                                placeholder=" 0"
                                disabled
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
                              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primaryColor focus:outline-none dark:bg-slate-800"
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
