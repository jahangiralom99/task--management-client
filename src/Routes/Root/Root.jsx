import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import TaskCreation from "../../Pages/TaskCreation/TaskCreation";
import TaskListing from "../../Pages/TaskListing/TaskListing";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]
            
    }
])

export default Root;