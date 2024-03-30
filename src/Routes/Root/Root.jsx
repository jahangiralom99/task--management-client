import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import TaskCreation from "../../Pages/TaskCreation/TaskCreation";
import TaskListing from "../../Pages/TaskListing/TaskListing";

const Root = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Error Page</h1>,
        children: [
            {
                index: true,
                element: <TaskListing></TaskListing>
            },
            {
                path: "Task-creation",
                element: <TaskCreation/>
            }
        ]
            
    }
])

export default Root;