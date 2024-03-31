import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});
const useAxiosPrivet = () => {
  const navigation = useNavigate();
  const { logOut } = useAuth();
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
        const status = error.response.status;
        // error handle 
      if (status === 401 || status === 403) {
        await logOut();
        navigation("/login");
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosPrivet;
