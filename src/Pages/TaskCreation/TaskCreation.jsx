import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// // get api from Imgbb
const image_hosting_api = `https://api.imgbb.com/1/upload?key=957628e55aa3b5dfacc5f5a22107ba39`;

const TaskCreation = () => {
  const axios = useAxiosPublic();
  const privetAxios = useAxiosPrivet();
  const navigate = useNavigate();
  // import form react hook form 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // React Hook forms
  const onSubmit = async(data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const url = res.data?.data?.display_url;
      const taskInfo = {
        name: data.name,
        image: url,
        title: data.title,
        description: data.description,
        price: data.price,
        postTime: new Date(),
        arrays : ["HTML",
        "Figma",
        "WordPress",
        "Coral Draw"]
      }
      const response = await privetAxios.post("/task-create", taskInfo);
      if (response.data.acknowledged) {
        reset();
        navigate("/")
        toast.success("Task Create in successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

   
  };

  return (
    <section className="p-3 pb-8 max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#ef6f18]">
        Task Creation
      </h1>
      <div>
        {/* Start Forms Task  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%] ">
              <label className="block text-sm font-bold mb-2">Name </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block  text-sm font-bold mb-2">Photo</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="file"
                {...register("photo", { required: true })}
                id="photo"
                name="photo"
              />
              {errors.photo && (
                <p className="text-red-600">Photo is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Description
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("description", { required: true })}
                placeholder="description"
                id="description"
                autoComplete="text"
              />
              {errors.description && (
                <p className="text-red-600">description is Required</p>
              )}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">Title</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("title", { required: true })}
                placeholder="Title"
                id="title"
                autoComplete="text"
              />
              {errors.color && (
                <p className="text-red-600">Title is Required</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">
                Price
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                id="price"
                autoComplete="text"
              />
              {errors.description && (
                <p className="text-red-600">description is Required</p>
              )}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">Color</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("color", { required: true })}
                placeholder="Color"
                id="color"
                autoComplete="text"
              />
              {errors.color && (
                <p className="text-red-600">Color is Required</p>
              )}
            </div>
          </div>
          <div className="mt-8 ">
            <button
              type="submit"
              className="rounded-md font-bold py-2 px-4 w-full border hover:border-red-500 hover:text-red-500"
            >
              Task Created
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TaskCreation;
