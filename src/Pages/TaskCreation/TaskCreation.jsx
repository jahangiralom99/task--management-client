import { useForm } from "react-hook-form";

const TaskCreation = () => {
  // import form react hook form 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // React Hook forms
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="p-3 pb-8 max-w-screen-xl mx-auto px-4">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#ef6f18]">
        Task Creation
      </h1>
      <div>
        {/* Start Forms Task  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%] ">
              <label className="block text-sm font-bold mb-2">Pet name</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="Pet name"
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block  text-sm font-bold mb-2">Pet Photo</label>
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
              <label className="block text-sm font-bold mb-2">Age</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
                {...register("age", { required: true })}
                placeholder="pet age"
                id="age"
                autoComplete="number"
              />
              {errors.age && <p className="text-red-600">age is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">Location</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("location", { required: true })}
                placeholder="your location"
                id="text"
                autoComplete="text"
              />
              {errors.location && (
                <p className="text-red-600">location is Required</p>
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
          <div className="flex items-center justify-center gap-12 p-2">
            <div className="mt-4 flex-[50%]">
              <label className="block  text-sm font-bold mb-2">Size</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("size", { required: true })}
                placeholder="size"
                id="size"
                autoComplete="text"
              />
              {errors.size && <p className="text-red-600">size is Required</p>}
            </div>
            <div className="mt-4 flex-[50%]">
              <label className="block text-sm font-bold mb-2">Date</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="date"
                {...register("date", { required: true })}
                id="date"
              />
              {errors.email && <p className="text-red-600">Date is Required</p>}
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
