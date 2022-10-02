import { useForm } from "../../../hooks/useForm";
import { useFetching } from "../../../hooks/useFetching";
import { signUp } from "../api/config";
import { useCallback, useEffect } from "react";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { useNavigate } from "react-router-dom";
import SignUp from "../components";
import { startCase } from "lodash";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleReset] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    gender: {},
    phoneNumber: "",
    password: "",
    // showPassword: false,
  });

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...formValues,
  //     showPassword: !formValues.showPassword,
  //   });
  // };

  const { data, isLoading, error, handleDataLoad } = useFetching(
    signUp,
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleDataLoad(formValues);
      handleReset();
    },
    [formValues]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [data]);

  return (
    <div>
      <SignUp
        data={data}
        error={error}
        startCase={startCase}
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
        handleFormReset={handleReset}
      />
    </div>
  );
};

export default SignUpContainer;
