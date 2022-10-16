import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { SignInSchema } from "../validations";

import { signIn } from "../redusers/index";
import SignIn from "../components";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { isAuthSelector } from "../../../selectors";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validateOnBlur: true,
      validationSchema: SignInSchema,

      onSubmit: (values, { resetForm }) => {
        dispatch(signIn(values));
        console.log(values);
        resetForm();
      },
    });

  const handleToSignUp = useCallback(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SHOP_BOX);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <SignIn
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleToSignUp={handleToSignUp}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
      />
    </div>
  );
};

export default SignInContainer;
