/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { Link } from "react-router-dom";

const TaskListingCard = ({ task, refetch }) => {
  const axios = useAxiosPrivet();
  const {
    name,
    image,
    arrays = [],
    title,
    description,
    price,
    postTime,
    _id,
  } = task || {};
  const data = new Date(postTime);
  const hours = data.getHours();

  // handle Deleted btn
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/task-list/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <section className="mt-6 border rounded-lg hover:border-[#ef6f18] py-8 px-8 ">
      <div className="  bg-white space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={image}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{name}</p>
            <p className="text-slate-500 font-medium">
              Post time {hours} hours ago
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        {arrays.map((item, idx) => (
          <div
            className="bg-[#eee9e61d] hover:text-white hover:bg-[#ef6f18]  p-3 rounded-full"
            key={idx}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="flex justify-between items-center border rounded-md p-4 ">
          <p className="font-bold text-xl">{price} $</p>
          <h1>Hourly</h1>
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/update/${_id}`} className="p-3 border rounded-lg hover:text-[#ef6f18] hover:border-[#ef6f18]">
            Update
          </Link>
          <button
            onClick={() => handleDeleted(_id)}
            className="p-3 border rounded-lg hover:text-[#ef6f18] hover:border-[#ef6f18]"
          >
            Deleted
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskListingCard;
