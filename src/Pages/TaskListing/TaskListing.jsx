import { useQuery } from "react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingCompo from "../../components/Common/LoadingCompo";
import TaskListingCard from "../../components/TaskListingCard/TaskListingCard";

const TaskListing = () => {
  const axios = useAxiosPublic();

  const { data: taskLists = [], isLoading } = useQuery({
    queryKey: ["task-listing"],
    queryFn: async () => {
      const res = await axios.get("/task-listing");
      return res.data;
    },
  });

  if (isLoading) return <LoadingCompo />;

  console.log(taskLists);

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-4">
      <h1 className="text-center font-bold text-2xl mt-6">
        Task Listing {taskLists.length}
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {taskLists?.map((task) => (
          <TaskListingCard key={task.id} task={task}></TaskListingCard>
        ))}
      </div>
    </div>
  );
};

export default TaskListing;
