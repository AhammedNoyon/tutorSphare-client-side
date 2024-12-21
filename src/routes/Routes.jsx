import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

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
        path: "login",
        element: <Login></Login>,
        children: [
          {
            path: "",
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
