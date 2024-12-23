import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosPrivateInstance = axios.create({
  baseURL: "https://b10-asm11-server.vercel.app",
  withCredentials: true,
});
const useAxiosPrivate = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // Add a response interceptor
  axiosPrivateInstance.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.status === 401 || error.status === 403) {
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
  return axiosPrivateInstance;
};

export default useAxiosPrivate;
