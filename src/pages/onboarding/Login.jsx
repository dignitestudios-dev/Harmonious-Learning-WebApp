import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import AuthInput from "../../components/onboarding/AuthInput"; // Assuming AuthInput is correctly imported
import AuthSubmitBtn from "../../components/onboarding/AuthSubmitBtn"; // Assuming AuthSubmitBtn is correctly imported

const Login = () => {
  const { navigate } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex w-full h-screen bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')",
      }}
    >
      <form
        onSubmit={() => navigate("/dashboard", "Home")}
        className="w-[610px] bg-black bg-opacity-70 p-16 rounded-2xl items-center justify-center flex flex-col gap-6"
      >
        <h1 className="text-2xl lg:text-4xl font-medium text-white text-center">
          Welcome Back!
        </h1>

        <div className="flex flex-col gap-4">
          {/* Email Input */}
          <AuthInput
            text="Email"
            placeholder="Type your email address here"
            type="email"
            state={email}
            setState={setEmail}
          />

          {/* Password Input */}
          <AuthInput
            text="Password"
            placeholder="Enter Password"
            type="password"
            state={password}
            setState={setPassword}
          />
          
          {/* Forgot Password Link */}
          {/* <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm font-medium text-blue-400 self-end"
          >
            Forgot Password?
          </button> */}
        </div>

        {/* Submit Button */}
        <div className="items-center justify-center rounded-lg">
        <AuthSubmitBtn text="Log In" />
        </div>
      </form>
    </div>
  );
};

export default Login;
