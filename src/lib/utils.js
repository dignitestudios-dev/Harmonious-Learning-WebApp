import { ErrorToast } from "../components/global/Toaster";

export const processSignup = (data, navigate) => {
  if (data?.success) {
    navigate("/app/dashboard");
    return;
  }
};

export const processLogin = (data, navigate, loginAuth) => {
  if (data?.success) {
    loginAuth(data);
    navigate("/");
    return;
  }
};

export const processUpload = (data, navigate) => {
  if (data?.success) {
    // loginAuth(data);
    // navigate("/meditation");
    return;
  }
};

export const processError = (error) => {
  console.log("🚀 ~ processError ~ error:", error);
  if (error?.response?.data?.message) {
    ErrorToast(error?.response?.data?.message);
    return;
  } else {
    ErrorToast("Something went wrong");
  }
};
