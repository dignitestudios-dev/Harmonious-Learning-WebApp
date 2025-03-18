import React from "react";
import { IoMdClose } from "react-icons/io";
import InputField from "../global/InputField";
import SaveButton from "../global/SaveButton";
import { useFormik } from "formik";
import { NotificationSchema } from "../../schema/Notification";
import { notificationValue } from "../../init/app/notification";
import { useCreateNotification } from "../../hooks/api/Post";
import { message } from "../../assets/export";
import { processPushNotification } from "../../lib/utils";

const NotificationsModal = ({ isOpen, onClose, setUpdate }) => {
  const { loading, postData } = useCreateNotification(onClose, setUpdate);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: notificationValue,
      validationSchema: NotificationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        postData(
          "/admin/notifications",
          true,
          {
            title: values.subscription,
            message: values.description,
            target: "user",
          },
  
          null,
          processPushNotification
        );
      },
    });
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 
          text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Create New Notification
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            id={"subscription"}
            name={"subscription"}
            label="Subscription"
            placeholder="Name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.subscription}
          />
          {errors.subscription && touched.subscription ? (
            <span className="text-red-700 text-sm font-medium">
              {errors.subscription}
            </span>
          ) : null}

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Description"
              rows={5}
              className="w-full mt-1 p-3 rounded-2xl border border-white/40 bg-transparent text-white"
            ></textarea>
            {errors.description && touched.description ? (
              <span className="text-red-700 text-sm font-medium">
                {errors.description}
              </span>
            ) : null}
          </div>
          <SaveButton title="Save" loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default NotificationsModal;
