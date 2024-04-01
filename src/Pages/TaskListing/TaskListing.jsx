import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingCompo from "../../components/Common/LoadingCompo";
import TaskListingCard from "../../components/TaskListingCard/TaskListingCard";
import { useState } from "react";

const TaskListing = () => {
  const axios = useAxiosPublic();
  const [page, setPage] = useState(1);
  const limit = 6;

  const {
    data: taskLists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task-listing", page, limit],
    queryFn: async () => {
      const res = await axios.get(`/task-listing?page=${page}&limit=${limit}`);
      return res?.data;
    },
  });
  
  if (isLoading) return <LoadingCompo />;

  // total page
  const tolaPage = Math.ceil(taskLists?.total / limit);

  // handle Previous Btn
  const handlePreviousBtn = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // handle Next Btn
  const handleNextBtn = () => {
    if (page < tolaPage) {
      setPage(page + 1);
    }
  };


  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-4">
      <h1 className="text-center font-bold text-2xl mt-6">
        Task Listing {taskLists.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {taskLists?.result?.map((task) => (
          <TaskListingCard
            key={task._id}
            task={task}
            refetch={refetch}
          ></TaskListingCard>
        ))}
      </div>
      <div className="text-center mt-5 mb-6">
        {/* Pagination */}
        <div aria-label="Page navigation">
          <ul className="inline-flex space-x-2">
            <li>
              <button
                onClick={handlePreviousBtn}
                className="flex items-center justify-center w-10 h-10  transition-colors border duration-150 rounded-full focus:shadow-outline hover:bg-[#f3782b] hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
                </svg>
              </button>
            </li>
            <div className="flex ">
              <li>
                {Array(tolaPage)
                  .fill(0)
                  .map((item, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`${
                          pageNumber === page ? "bg-[#f3782b] text-white" : ""
                        } w-10 h-10 font-bold transition-colors duration-150 rounded-full focus:shadow-outline hover:text-white hover:bg-[#f3782b]`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
              </li>
            </div>
            <li>
              <button
                onClick={handleNextBtn}
                className="flex items-center justify-center w-10 h-10 transition-colors duration-150 border bg-white rounded-full focus:shadow-outline hover:bg-[#f3782b] hover:text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskListing;
