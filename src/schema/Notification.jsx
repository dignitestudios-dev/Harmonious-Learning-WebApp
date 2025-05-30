import * as Yup from "yup";

export const NotificationSchema = Yup.object({
  subscription: Yup.string()
    .max(20, "Title must be 20 characters or less")
    .required("Title is required")
    .matches(/^(?!\s*$)(?![^a-zA-Z0-9 ]).*/, "Title must not contain only whitespace or special characters"),
  
  description: Yup.string()
    .required("Description is required")
    .matches(/^(?!\s*$)(?![^a-zA-Z0-9 ]).*/, "Description must not contain only whitespace or special characters"),
});

