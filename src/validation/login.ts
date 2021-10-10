import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Errors.EmailValid").required("Errors.Required"),
  password: Yup.string()
    .min(6, "Errors.MinLength6")
    .max(30, "Errors.MaxLength30")
    .required("Errors.Required"),
});