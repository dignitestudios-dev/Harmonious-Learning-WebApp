import { useContext, useState } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AppContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginAuth } = useContext(AuthContext);

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, { ...data });
      if (typeof callback === "function") {
        callback(response?.data, navigate, loginAuth);
      }
      return response?.data;
    } catch (error) {
      console.log("🚀 ~ useLogin ~ error:", error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useUpload = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      console.log("🚀 ~ useUpload ~ error:", error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
export { useLogin, useUpload };
