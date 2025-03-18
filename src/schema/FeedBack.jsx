import * as Yup from "yup";

export const FeedBackSchema = Yup.object({
  description: Yup.string().required("Please enter your description"),
});
