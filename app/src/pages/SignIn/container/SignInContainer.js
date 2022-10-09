import { useFormik } from "formik";
import { SignInSchema } from "../validations";
import SignIn from "../components";

const SignInContainer = () => {
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validateOnBlur: true,
      validationSchema: SignInSchema,

      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div>
      <SignIn
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

export default SignInContainer;
