import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteOutline, MdSystemUpdateAlt } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseAxiosPrivate from "../../hooks/UseAxiosPrivate";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const axiosPrivate = UseAxiosPrivate();
  // console.log(tutorials);
  ///=========>>> load tutorials
  useEffect(() => {
    if (user?.email) {
      axiosPrivate
        .get(`http://localhost:5000/tutorials/${user?.email}`)
        .then((res) => {
          setTutorials(res.data);
        });
    }
  }, [user?.email, axiosPrivate]);
  ///=========>>> Delete Not Okay
  const handleDelete = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:5000/tutorials/${id}`
    );
    // console.log(data);
    if (data.deletedCount === 1) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
    const remaining = tutorials.filter((tutorial) => tutorial._id !== id);
    setTutorials(remaining);
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
                      <h3 className="font-bold dark:text-white">
                        {tutorial?.CourseName}
                      </h3>
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
                  <Link to={`/update-tutorials/${tutorial?._id}`}>
                    <button className="btn text-xl bg-primaryColor text-white">
                      <MdSystemUpdateAlt />
                    </button>
                  </Link>
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
        {tutorials.length <= 0 && (
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold dark:text-white text-center mb-10 md:mb-20">
            No Data Has Found
          </h3>
        )}
      </div>
    </div>
  );
};

export default MyTutorials;
