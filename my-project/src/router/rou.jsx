import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../view/home/Home";
import Login from "../view/login/Login";

const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />, // แก้ไขให้ใช้ตัวพิมพ์ใหญ่
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouterPath;
