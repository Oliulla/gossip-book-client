import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
