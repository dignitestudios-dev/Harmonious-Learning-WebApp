import { ErrorToast, SuccessToast } from "../components/global/Toaster";

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

export const processUpload = (
  data,
  navigate,
  setUpdate,
  isUpdate = false,
  onClose
) => {
  if (data?.success) {
    if (isUpdate) {
      setUpdate((prev) => !prev);
      onClose();
    } else {
      navigate;
    }
    return;
  }
};
export const processFeedback = (data, onClose, setUpdate) => {
  if (data?.success) {
    SuccessToast("Feedback Reply send successfully");
    onClose();
    setUpdate((prev) => !prev);
    return;
  }
};

export const processSubject = (data, onClose, setUpdate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    onClose();
    setUpdate((prev) => !prev);
    return;
  }
};
export const processPushNotification = (data, onClose, setUpdate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    onClose();
    setUpdate((prev) => !prev);
    return;
  }
};
export const processDelete = (data, setUpdate, onClose) => {
  if (data?.success) {
    SuccessToast(data?.message);
    onClose();
    setUpdate((prev) => !prev);
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
