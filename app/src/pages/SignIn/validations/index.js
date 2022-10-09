import * as Yup from "yup";
import { passwordRegex } from "./regex";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Enter correct email").required("required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      passwordRegex,
      "Must One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
