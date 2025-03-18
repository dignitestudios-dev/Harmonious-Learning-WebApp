import * as Yup from "yup";

export const subjectSchema = Yup.object({
    subjectname: Yup.string().required("Please enter your subject name"),
});
