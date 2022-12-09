import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  description: Yup.string().required("description is required").min(20, 'Username must be at least 10 characters'),
  cost: Yup.string().required("cost is required"),
  image: Yup.string().required("image is required"),
});
