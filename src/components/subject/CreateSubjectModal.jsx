import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SaveButton from "../global/SaveButton";
import { useCreateSubject } from "../../hooks/api/Post";
import { useFormik } from "formik";
import { subjectValues } from "../../init/app/subjectValues";
import { subjectSchema } from "../../schema/SubjectSchema";
import { processSubject } from "../../lib/utils";
import { ErrorToast } from "../global/Toaster";

const CreateSubjectModal = ({ isOpen, onClose, setUpdate, subject }) => {
  const { loading, postData } = useCreateSubject(onClose, setUpdate);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: subjectValues,
      validationSchema: subjectSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const isValid = /^[a-zA-Z0-9\s]+$/.test(values.subjectName.trim());

        if (!isValid) {
          return;
        }
        if (subject.includes(values.subjectName)) {
          ErrorToast("Subject name already exist");
          return;
        }

        postData(
          "/admin/createSubjects",
          true,
          { subject: [values.subjectName] },
          null,
          processSubject
        );
      },
    });
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[249px] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl
           text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-[18px] font-semibold mb-4 text-left mt-2">
            Add New Subject
          </h2>
          <div className="flex flex-col items-start text-center ">
            <label className="block text-[16px] mb-2">Subject</label>
            <input
              id="subjectName"
              name="subjectName"
              type="text"
              placeholder="Name"
              value={values.subjectName}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm "
            />
            {errors.subjectName && touched.subjectName ? (
              <span className="text-red-700 text-sm font-medium">
                {errors.subjectName}
              </span>
            ) : null}
            <div className="w-full flex space-x-4 mt-6">
              <SaveButton title="Save" loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubjectModal;
