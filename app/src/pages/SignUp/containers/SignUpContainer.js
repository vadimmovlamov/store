import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { useFetching } from "../../../hooks/useFetching";

import { signUp } from "../api";
import { SignUpSchema } from "../validations";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import SignUp from "../components";

const SignUpContainer = () => {
  const { data, handleDataLoad, isLoading, error } = useFetching(
    signUp,
    null,
    false
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(values);

      resetForm();
    },
    validationSchema: SignUpSchema,
  });

  const [valuePassword, setValuePassword] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = useCallback(() => {
    setValuePassword({
      ...valuePassword,
      showPassword: !valuePassword.showPassword,
    });
  }, [valuePassword]);

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        localStorage.setItem("data", data.config.data);

        navigate(ROUTE_NAMES.SIGN_IN);
      }, 2000);

      return () => clearTimeout(timeout);
    }
    if (error?.message) {
      error.response.data.message = null;
    }
  }, [data, navigate, error]);

  return (
    <div>
      <SignUp
        formik={formik}
        data={data}
        error={error}
        isLoading={isLoading}
        valuePassword={valuePassword}
        onClickShowPassword={handleClickShowPassword}
      />
    </div>
  );
};

export default SignUpContainer;
