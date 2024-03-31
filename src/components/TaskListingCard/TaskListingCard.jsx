/* eslint-disable react/prop-types */
const TaskListingCard = ({ task }) => {
  const { name, image, arrays = [], title, description, price } = task || {};
  return (
    <section className="mt-6 border rounded-lg hover:border-[#ef6f18] py-8 px-8">
      <div className="  bg-white space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={image}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{name}</p>
            <p className="text-slate-500 font-medium">post time 3 hours </p>
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
          <button className="p-3 border rounded-lg hover:text-[#ef6f18] hover:border-[#ef6f18]">
            Update
          </button>
          <button className="p-3 border rounded-lg hover:text-[#ef6f18] hover:border-[#ef6f18]">
            Deleted
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskListingCard;
