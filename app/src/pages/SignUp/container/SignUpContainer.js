import SignUp from "../components";
import { useFormik } from "formik";
import { SignUpSchema } from "../validations";

const SignUpContainer = () => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    initialValues,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnBlur: true,
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <SignUp
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
      />
    </div>
  );
};

export default SignUpContainer;
