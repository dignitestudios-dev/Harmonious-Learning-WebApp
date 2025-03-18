import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { loginBg } from "../assets/export";
import { AuthContext } from "../contexts/AppContext";

const AuthLayout = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
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
