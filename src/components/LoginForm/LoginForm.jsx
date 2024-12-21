import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [eye, setEye] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectFormData = Object.fromEntries(formData.entries());
    console.log(objectFormData);
  };
  return (
    <div className=" bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col justify-center items-center px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
        Sign Into Your Account
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          name="email"
          required
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
        />
        <div className="relative">
          <input
            name="password"
            required
            type={eye ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-gray-300 focus:outline-none "
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
          className="w-full bg-red-500 py-2 rounded-md font-bold text-white hover:bg-red-600 transition"
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
