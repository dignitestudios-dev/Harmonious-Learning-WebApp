import { useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { processError } from "../../lib/utils";

const useDelete = (setUpdate, onClose) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteData = async (url, storyId, callback) => {
    try {
      setLoading(true);
      const response = await axios.post(url, { storyId });
      if (typeof callback === "function") {
        callback(response?.data, setUpdate, onClose);
      }
      return response?.data;
    } catch (error) {
      console.log("🚀 ~ useUpload ~ error:", error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteData };
};

export { useDelete };
