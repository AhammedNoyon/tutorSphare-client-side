import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

// import loginAnimation from "../../assets/lottie/loginPage/login.json";
// import Lottie from "lottie-react";

const Login = () => {
  const { signInByGoogle } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  //google login
  const handleGoogleLogin = () => {
    signInByGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="bg-loginBanner py-32 lg:py-52">
        <div className="w-11/12 md:w-3/4 mx-auto flex flex-col lg:flex-row justify-center">
          {/* Left Section */}
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center lg:text-start lg:w-3/5">
              Welcome Back
              <span className="text-white"> to Your </span>
              <span className="text-primaryColor">TutorSphere</span>{" "}
            </h1>
            <p className="text-white mt-4  max-w-md text-justify md:text-center lg:text-start md:ml-16 lg:ml-0">
              Log in to access personalized tutoring, track your progress, and
              connect with expert tutors worldwide. Your learning journey is
              just a click away!
            </p>

            <div className="mt-8 flex space-x-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Github
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
                Twitter
              </button>
              <button
                onClick={handleGoogleLogin}
                className="bg-error text-white px-4 py-2 rounded-md"
              >
                Google
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col md:justify-center md:items-center">
            {/* <div className=" mx-auto   ">
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
        </div> */}
            {/* Right Section */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
