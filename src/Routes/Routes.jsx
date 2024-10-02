import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Profile from "../components/profile/Profile";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Works from "../components/works/works";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/projects",
                element: <Projects></Projects>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/works",
                element: <Works></Works>,
                errorElement: <ErrorPage />,
            },
        ]
    }
]);
