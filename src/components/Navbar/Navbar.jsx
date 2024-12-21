import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

import { LuLightbulb } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../hooks/theme/useTheme";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { changeTheme, mode } = useTheme();

  //======>> menu
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors">Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to="/add-tutorials">Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/my-tutorials">My Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/my-booked-tutors">My Booked Tutors</NavLink>
      </li>
    </>
  );
  //=====>logout
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <nav className="navbar w-11/12 md:w-3/4 mx-auto p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 dark:text-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <h3 className=" text-2xl font-bold dark:text-gray-100 md:text-3xl lg:text-5xl">
          TutorSphere
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium dark:text-gray-400">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={changeTheme} className="text-4xl mr-3 dark:text-white">
          {mode === "light" ? (
            <div>
              <MdDarkMode />{" "}
            </div>
          ) : (
            <div>
              <LuLightbulb />
            </div>
          )}
        </button>
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user" src={user?.photoURL} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 dark:text-gray-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <p className="justify-between">{user?.displayName}</p>
                </li>
                <li>
                  <p className="justify-between">{user?.email}</p>
                </li>
                <Link>
                  <button onClick={handleLogout} className="btn mt-2">
                    Logout
                  </button>
                </Link>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
