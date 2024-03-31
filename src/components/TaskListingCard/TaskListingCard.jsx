/* eslint-disable react/prop-types */
const TaskListingCard = ({ task }) => {
  const { name, image } = task || {};
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
      <div>
        <h2>fdfsf</h2>
      </div>
    </section>
  );
};

export default TaskListingCard;
