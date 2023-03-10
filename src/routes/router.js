import { createBrowserRouter } from "react-router-dom";
import OpenRoot from "../Layouts/OpenRoot";
import ProfileAbout from "../Layouts/ProfileAbout";
import Root from "../Layouts/Root";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import PostDetails from "../Pages/Media/PostDetails";
import Message from "../Pages/Message/Message";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/userposts/:id",
        loader: ({ params }) =>
          fetch(`https://gossip-server-nf7b5t583-oliulla.vercel.app/usersposts/${params.id}`),
        element: <PostDetails />,
      },
    ],
  },
  {
    path: "/profile/about",
    element: (
      <PrivateRoute>
        <ProfileAbout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/openroot",
    element: <OpenRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/openroot/login",
        element: <Login />,
      },
      {
        path: "/openroot/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
