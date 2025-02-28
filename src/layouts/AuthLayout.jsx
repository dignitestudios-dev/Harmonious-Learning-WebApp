import React from "react";
import { Outlet } from "react-router-dom";
import { loginBg } from "../assets/export";

const AuthLayout = () => {
  return (
    <div
      className="flex w-full h-screen bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
