import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import LoadingCompo from "../Common/LoadingCompo";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";

// get api from Imgbb
const image_hosting_api = `https://api.imgbb.com/1/upload?key=957628e55aa3b5dfacc5f5a22107ba39`;

const TaskUpdate = () => {
  const { id } = useParams();
    const axios = useAxiosPrivet();
    const axios2 = useAxiosPublic()
    const navigate = useNavigate();

  // import form react hook form
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useQuery({
    queryKey: ["single-task", id],
    queryFn: async () => {
      const res = await axios.get(`/task-list/${id}`);
      return res.data;
    },
  });
  if (isLoading) return <LoadingCompo />;

  const { name, arrays = [], title, description, price, _id } = data || {};

  // Handle form
  const onSubmit = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axios2.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      const url = res.data?.data?.display_url;
      const updateInfo = {
        name: data.name,
        image: url,
        title: data.title,
        description: data.description,
        price: data.price,
        postTime: new Date(),
        // arrays: [...data.arrays],
        };
        const response = await axios.patch(`/task-update/${_id}`, updateInfo);
        // console.log(response.data.modifiedCount > 0);
        if (response.data.modifiedCount > 0) {
            navigate("/")
            toast.success("Task Update in successfully", {
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

//   console.log(data);

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
                defaultValue={name}
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
                defaultValue={description}
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
                defaultValue={title}
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
              <label className="block text-sm font-bold mb-2">Price</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                defaultValue={price}
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
              <label className="block text-sm font-bold mb-2">Arrays</label>
              <input
                className="bg-gray-200  text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                defaultValue={arrays}
                {...register("arrays", { required: true })}
                placeholder="Color"
                id="color"
                autoComplete="text"
              />
              {errors.color && (
                <p className="text-red-600">Arrays is Required</p>
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

export default TaskUpdate;
