import { FaClipboardList, FaLanguage, FaStar, FaUsers } from "react-icons/fa";

const Status = () => {
  return (
    <>
      <div className="w-11/12 md:w-3/4 mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Tutors */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 dark:text-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <FaUsers className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-lg font-medium">Tutors</h3>
                <p className="text-xl font-semibold">120</p>{" "}
                {/* Replace with dynamic data */}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 dark:text-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <FaStar className="text-4xl text-yellow-500" />
              <div>
                <h3 className="text-lg font-medium">Reviews</h3>
                <p className="text-xl font-semibold">350</p>{" "}
                {/* Replace with dynamic data */}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 dark:text-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <FaLanguage className="text-4xl text-green-500" />
              <div>
                <h3 className="text-lg font-medium">Languages</h3>
                <p className="text-xl font-semibold">15</p>{" "}
                {/* Replace with dynamic data */}
              </div>
            </div>
          </div>

          {/* Users */}
          <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800 dark:text-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <FaClipboardList className="text-4xl text-red-500" />
              <div>
                <h3 className="text-lg font-medium">Users</h3>
                <p className="text-xl font-semibold">500</p>{" "}
                {/* Replace with dynamic data */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
