import { IoMdClose } from "react-icons/io";
import SaveButton from "../global/SaveButton";
import { useFormik } from "formik";
import { useFeedBackReply } from "../../hooks/api/Post";
import { FeedBackSchema } from "../../schema/FeedBack";
import { feedbackValue } from "../../init/app/feedback";
import { processFeedback } from "../../lib/utils";

const FeedbackReplyModal = ({ isOpen, onClose, feedbackId, setUpdate }) => {
  if (!isOpen) return null;
  const replyFeedbackId = feedbackId?._id;
  const { loading, postData } = useFeedBackReply(onClose, setUpdate);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: feedbackValue,
      validationSchema: FeedBackSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        postData(
          "/admin/replyFeedback",
          true,
          { message: values.description, feedbackId: replyFeedbackId },
          null,
          processFeedback
        );
      },
    });
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-20 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[349px] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
            Feedback Reply
          </h2>
          <div className="flex flex-col items-start text-center ">
            <label className=" text-[16px] font-light mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Description"
              rows={4}
              maxLength={250}
              className="w-full mt-1 p-3 rounded-2xl border border-gray-600 bg-black bg-opacity-30 text-white"
            ></textarea>
            {errors.description && touched.description ? (
              <span className="text-red-700 text-sm font-medium">
                {errors.description}
              </span>
            ) : null}
            <div className="w-full flex space-x-4 mt-6">
              <SaveButton title="Send" loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackReplyModal;
