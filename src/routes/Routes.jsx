import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import FindTutors from "../pages/FindTutors/FindTutors";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h3>Create a error page</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "find-tutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "add-tutorials",
        element: <AddTutorials></AddTutorials>,
      },
      {
        path: "my-tutorials",
        element: <MyTutorials></MyTutorials>,
      },
      {
        path: "my-booked-tutors",
        element: <MyBookedTutors></MyBookedTutors>,
      },

      {
        path: "login",
        element: <Login></Login>,
        children: [
          {
            path: "/login",
            element: <LoginForm></LoginForm>,
          },
          {
            path: "/login/registerForm",
            element: <RegisterForm></RegisterForm>,
          },
        ],
      },
    ],
  },
]);
export default router;
