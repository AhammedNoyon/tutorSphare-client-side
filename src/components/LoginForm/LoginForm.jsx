import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [eye, setEye] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    ////=========>> sign in user
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "sign in  successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(location.pathname || "/");
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please enter your valid info..!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="  flex flex-col ">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-start">
        Sign Into Your Account
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          name="email"
          required
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-white focus:outline-none"
        />
        <div className="relative">
          <input
            name="password"
            required
            type={eye ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-white focus:outline-none "
          />
          <div
            onClick={() => setEye(!eye)}
            className="absolute top-3 right-6 text-xl text-gray-300"
          >
            {eye ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          className="w-full  py-2  rounded-md font-bold dark:text-white bg-primaryColor transition"
        >
          Login
        </button>
      </form>
      <div className="flex justify-between w-full max-w-sm mt-4 text-sm">
        <a href="#" className="text-gray-300 hover:underline">
          Forgot Password
        </a>
        <Link
          to="/login/registerForm"
          className="text-gray-300 hover:underline"
        >
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
