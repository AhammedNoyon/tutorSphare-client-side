import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-screen w-11/12 md:w-3/4 mx-auto my-10 md:my-20">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white flex flex-col justify-center items-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
            We <span className="text-red-500">Make</span>{" "}
            <span className="text-black">Spectacular</span>
          </h1>
          <p className="text-gray-600 mt-4 text-center max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="mt-6 px-8 py-3 border-2 border-red-500 text-red-500 font-bold rounded-md hover:bg-red-500 hover:text-white transition">
            Register
          </button>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Github
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Twitter
            </button>
            <button
              onClick={handleGoogleLogin}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Google
            </button>
          </div>
        </div>

        {/* Right Section */}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Login;
