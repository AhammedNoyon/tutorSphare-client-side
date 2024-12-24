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
import PrivateRoutes from "../Private/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import TutorialDetails from "../pages/TutorialDetails/TutorialDetails";
import Category from "../pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "find-tutors/:id",
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),
      },
      {
        path: "tutor/:id",
        element: (
          <PrivateRoutes>
            <TutorialDetails></TutorialDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "add-tutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials></AddTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-tutorials",
        element: (
          <PrivateRoutes>
            <MyTutorials></MyTutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "my-booked-tutors",
        element: (
          <PrivateRoutes>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoutes>
        ),
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
