import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [eye, setEye] = useState(false);
  const { manageUserProfile, registerUpUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    ///=======>>>>> some validation

    if (name.length < 3) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your name more than 3 character!",
      });
    }
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please password must more than 6 character!",
      });
    }
    const digit = /(?=.*[0-9])/;
    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /(?=.*[a-z])/;
    const special = /(?=.*[\W_])/;

    if (!digit.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least digit!",
      });
    }
    if (!upperCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least upperCase!",
      });
    }
    if (!lowerCase.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least lowerCase!",
      });
    }
    if (!special.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter at least special character!",
      });
    }
    ///=======>>>>> register user
    registerUpUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          ////=======>>>>>update profile user
          manageUserProfile(name, photo)
            .then(() => {})
            .catch((error) => {
              Swal.fire({
                position: "center",
                icon: "error",
                title: error.errorMessage,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
        form.reset();
        navigate("/");
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
    <div className=" bg-gradient-to-br from-primaryColor to-error flex flex-col justify-center items-center px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
        Register Into Your Account
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          name="name"
          required
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
        />
        <input
          name="photo"
          required
          type="url"
          placeholder="Photo URL"
          className="w-full px-4 py-2 border-b-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
        />
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
          Register
        </button>
      </form>
      <div className="flex justify-between w-full max-w-sm mt-4 text-sm">
        <p className="text-gray-300">Already have an account? Please </p>
        <Link to="/login" className="text-gray-300 hover:underline">
          login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
