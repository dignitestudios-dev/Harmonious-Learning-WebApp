import * as Yup from "yup";

export const NotificationSchema = Yup.object({
  subscription: Yup.string().required("Please enter your subscripton"),
  description: Yup.string().required("Please enter your description"),
});
