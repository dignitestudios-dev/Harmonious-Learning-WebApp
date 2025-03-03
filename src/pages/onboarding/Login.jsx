import React, { useState } from "react";

import AuthInput from "../../components/onboarding/AuthInput";
import AuthSubmitBtn from "../../components/onboarding/AuthSubmitBtn";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "../../axios";
import { signInValues } from "../../init/authentication/signInValues";
import { signInSchema } from "../../schema/signInSchema";
import { SuccessToast } from "../../components/global/Toaster";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  //   useFormik({
  //     initialValues: signInValues,
  //     validationSchema: signInSchema,
  //     validateOnChange: true,
  //     validateOnBlur: true,
  //     onSubmit: async (values) => {
  //       try {
  //         setLoading(true);
  //         const response = await axios.post("/admin/login", {
  //           ...values,
  //         });
  //         if (response.status === 200) {
  //           // login(response.data);
  //           SuccessToast("Logged in successfully");
  //           navigate("/");
  //           setLoading(false);
  //         }
  //       } catch (err) {
  //         console.error("🚀 ~ onSubmit: ~ err:", err);
  //         ErrorToast(err.response.data.message);
  //         setLoading(false);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //   });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/");
      }}
      className="w-[610px] bg-[#00000044] border-[#000] rounded-[26px] shadow-md p-16 backdrop-blur-md items-center justify-center flex flex-col gap-6 z-50"
    >
      <h1 className="text-[30px] lg:text-[36px] font-semibold text-white text-center">
        Welcome Back!
      </h1>

      <div className="flex flex-col gap-4">
        {/* Email Input */}
        <AuthInput
          text="Email"
          type="email"
          id="email"
          name="email"
          // value={values.email}
          // onChange={handleChange}
          // onBlur={handleBlur}
          // error={errors?.email}
          // touched={touched?.email}
        />

        {/* Password Input */}
        <AuthInput
          text="Password"
          type="password"
          id="password"
          name="password"
          // value={values.password}
          // onChange={handleChange}
          // onBlur={handleBlur}
          // error={errors?.password}
          // touched={touched?.password}
        />

        {/* Submit Button */}

        <AuthSubmitBtn text="Log In" />
      </div>
    </form>
  );
};

export default Login;
