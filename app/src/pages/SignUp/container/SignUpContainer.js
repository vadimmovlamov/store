import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { useFetching } from "../../../hooks/useFetching";
import { signUp } from "../api/config";
import { SignUpSchema } from "../validations";
import { ROUTE_NAMES } from "../../../router/routeNames";
import SignUp from "../components";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const { data, handleDataLoad, isLoading, error } = useFetching(
    signUp,
    null,
    false
  );

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
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(values);
      console.log(values);

      resetForm();
    },
    validateOnBlur: true,
    validationSchema: SignUpSchema,
  });

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        localStorage.setItem("data", data.config.data);

        navigate(ROUTE_NAMES.SIGN_IN);
      }, 3000);

      return () => clearTimeout(timeout);
    }
    if (error?.message) {
      error.response.data.message = null;
    }
  }, [data, navigate, error]);

  return (
    <div>
      <SignUp
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SignUpContainer;
