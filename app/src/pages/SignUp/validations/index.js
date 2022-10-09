import * as Yup from "yup";
import { passwordRegex, phoneRegex } from "./regex";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  gender: Yup.string().required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(30, "Too Long!")
    .matches(phoneRegex, "Enter correct phone number")
    .required("Required"),
  email: Yup.string().email("Enter correct email").required("required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      passwordRegex,
      "Must One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
