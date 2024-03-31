import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [isError, setError] = useState("");
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle submit form 
  const onSubmit = async (data) => {
    try {
      setError("");
      await login(data.email, data.password);
      navigate(location?.state ? location?.state : "/")
      toast.success("User logged in successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      //   console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="py-16">
      <div className="flex  rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-screen-xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img
            src="https://i.postimg.cc/RC8q2kNf/login.jpg"
            alt="login-images"
          />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center">Please Login !</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                {...register("email", { required: true })}
                placeholder="Your Email"
                id="email"
                name="email"
                required
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-600">Email is Required</p>
              )}
            </div>
            <div className="mt-4 relative">
              <div className="flex justify-between">
                <label className="block text-sm font-bold mb-2">Password</label>
                <a href="#" className="text-xs hover:text-[#ef6f18]">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                id="password"
                name="password"
                required
                autoComplete="email"
                type={isShow ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-600">Password is Required</p>
              )}
              <div
                onClick={() => setIsShow(!isShow)}
                className="ml-2 mt-3 absolute right-5 top-7 hover:text-[#ef6f18]"
              >
                {isShow ? (
                  <BsEyeFill className="text-xl" />
                ) : (
                  <BsEyeSlashFill className="text-xl" />
                )}
              </div>
              {isError && <p className="text-red-600 mt-4">{isError}</p>}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="font-bold py-2 px-4 w-full rounded border hover:border-[#ef6f18] hover:text-[#ef6f18]"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/register" className="text-xs  uppercase">
              or{" "}
              <span className="font-bold border p-2 rounded-2xl hover:border-[#ef6f18]">
                Register
              </span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
