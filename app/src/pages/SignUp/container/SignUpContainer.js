import { useForm } from "../../../hooks/useForm";
import { useFetching } from "../../../hooks/useFetching";
import { startCase } from "lodash";
import { signUp } from "../api/config";
import { useCallback, useEffect } from "react";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { useNavigate } from "react-router-dom";
import styles from "./styles.scss";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleReset] = useForm({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "+375__",
    address: "",
    city: "",
    goods: "",
    comments: "",
    password: "",
  });

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
      <h1 className={styles.head}>Registration form</h1>

      <form onSubmit={handleSubmit} className={styles.wrapper}>
        {Object.entries(formValues).map(([fieldName, value]) => {
          return (
            <input
              key={fieldName}
              type="text"
              placeholder={startCase(fieldName)}
              name={fieldName}
              value={value}
              onChange={handleFormChange}
            />
          );
        })}

        <button role="submit">Create Account</button>

        <p style={{ color: "green" }}>{data?.data?.message}</p>
        <p style={{ color: "red" }}>{error?.message}</p>
      </form>
    </div>
  );
};

export default SignUpContainer;
