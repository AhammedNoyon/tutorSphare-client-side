import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/errorPage/errorPage.json";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <div className="w-[500px] mx-auto ">
        <Lottie animationData={errorAnimation} loop={true}></Lottie>
      </div>
      <div className="space-y-3 text-center ml-32 md:ml-0">
        <h3 className="text-3xl md:text-5xl font-bold text-error">
          Oooppps.....!
        </h3>
        <h3 className="text-3xl  font-bold">Page Not Found</h3>
        <div>
          <Link to="/">
            <button className="btn bg-primaryColor text-white font-bold text-xl">
              <IoArrowBackCircle /> Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
