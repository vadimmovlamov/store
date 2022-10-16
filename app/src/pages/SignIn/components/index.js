import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../router/routeNames";

import HomeIcon from "@mui/icons-material/Home";
import { Button, TextField } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";

import styles from "./styles.module.scss";

const SignIn = ({
  values,
  handleChange,
  handleSubmit,
  handleToSignUp,
  errors,
  touched,
  handleBlur,
}) => {
  const [isPasswordVisible, setVisible] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME}>
        <Button startIcon={<HomeIcon />}></Button>
      </Link>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.head}>log in your account</h1>

        <label>
          <TextField
            style={{ marginTop: 20 }}
            type={"email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            placeholder={"Enter e-mail"}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p className={styles.err}>
              <NotificationImportantOutlinedIcon />
              {errors.email}
            </p>
          )}
        </label>

        <label>
          <TextField
            style={{ marginTop: 20 }}
            type={isPasswordVisible ? "text" : "password"}
            name={"password"}
            value={values.password}
            onChange={handleChange}
            placeholder={"Enter password"}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <p className={styles.err}>
              <NotificationImportantOutlinedIcon /> {errors.password}
            </p>
          )}
        </label>

        <Button
          type="submit"
          onClick={handleToSignUp}
          // className={styles.button}
          endIcon={<PersonAddAltOutlinedIcon />}
          style={{
            backgroundColor: "rgba(122, 199, 81, 1)",
            color: "white",
            fontSize: 18,
            borderRadius: 10,
            textTransform: "capitalize",
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          log in
        </Button>
        <Button endIcon={<CreateOutlinedIcon />} className={styles.bigButton}>
          <Link to={ROUTE_NAMES.SIGN_UP} className={styles.linktext}>
            create a new account
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
