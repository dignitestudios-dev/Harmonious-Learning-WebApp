import * as Yup from "yup";

export const NotificationSchema = Yup.object({
  subscription: Yup.string()
    .max(20, "Title must be 20 characters or less")
    .required("Title is required"),
  description: Yup.string().required("Description is required"),
});
