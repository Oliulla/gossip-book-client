import {createBrowserRouter} from "react-router-dom";
import OpenRoot from "../Layouts/OpenRoot";
import Root from "../Layouts/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/media',
                element: <Media />
            },
            {
                path: '/message',
                element: <Message />
            },
            {
                path: '/about',
                element: <About />
            },
        ]

    },
    {
        path: '/openroot',
        element: <OpenRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/openroot/login',
                element: <Login />
            },
            {
                path: '/openroot/register',
                element: <Register />
            },
        ]

    }
])

export default router;