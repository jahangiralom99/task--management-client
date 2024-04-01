import axios from "axios";

const instance = axios.create({
    baseURL: 'https://task-server-umber.vercel.app/api/v1',
  });

const useAxiosPublic = () => {
    return instance
};

export default useAxiosPublic;
