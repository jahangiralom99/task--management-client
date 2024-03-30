import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const [isShow, setIsShow] = useState(false);
    const {createUser, updateName} = useAuth()

  // register form use React hook from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // Submit handle function
  const onSubmit = async (data) => {
      try {
          await createUser(data.email, data.password)
          await updateName(data.name)
      } catch (err) {
          console.log(err.massage);
    }
  };

  return (
    <div className="py-16">
      <div className="flex flex-row-reverse rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-screen-xl gap-5">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img src="https://i.postimg.cc/RC8q2kNf/login.jpg" alt="" />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-bold text-center">Please Register !</h2>
          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">Your name</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="Your name" required
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                {...register("email", { required: true })}
                placeholder="Your email" required
                id="email"
                name="email"
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
                id="password" required
                name="password"
                autoComplete="email"
                type={isShow ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="Set Password"
              />
              {errors.password && (
                <p className="text-red-600">Password is Required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must be 1 uppercase 1 special characters &
                </p>
              )}
              <div
                onClick={() => setIsShow(!isShow)}
                className="ml-2 mt-3 absolute right-4 top-7"
              >
                {isShow ? (
                  <BsEyeFill className="text-xl" />
                ) : (
                  <BsEyeSlashFill className="text-xl" />
                )}
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="font-bold py-2 px-4 w-full rounded border hover:border-[#ef6f18] hover:text-[#ef6f18]"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/login" className=" text-center">
              Already have account ? please{" "}
              <span className="font-bold border px-5 py-1 ml-3 rounded-2xl hover:border-[#ef6f18]">
                Login
              </span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>

          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
