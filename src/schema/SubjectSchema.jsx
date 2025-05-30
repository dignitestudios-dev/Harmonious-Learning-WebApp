import * as Yup from "yup";

export const subjectSchema = Yup.object().shape({
  subjectName: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9\s]+$/, "Only letters and numbers are allowed.")
    .required("Enter a valid subject name"),
});
