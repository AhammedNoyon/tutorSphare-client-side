import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://b10-asm11-server.vercel.app",
  withCredentials: true,
});
const UseAxiosPrivate = () => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logoutUser()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosPrivate;
