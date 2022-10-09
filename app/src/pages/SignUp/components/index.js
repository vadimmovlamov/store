import { Link } from "react-router-dom";
import { useState } from "react";
import { ROUTE_NAMES } from "../../../router/routeNames";

import { Button, TextField } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HomeIcon from "@mui/icons-material/Home";
import RadioGroup from "@mui/material/RadioGroup";

import styles from "./styles.module.scss";

const SignUp = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched,
  handleBlur,
}) => {
  const [isPasswordVisible, setVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME}>
        <Button startIcon={<HomeIcon />}></Button>
      </Link>

      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.head}>Registration form</h1>

          {/*1. First name*/}
          <label>
            <TextField
              className={styles.textfield}
              type={"text"}
              name={"firstName"}
              value={values.firstName}
              onChange={handleChange}
              placeholder={"Enter first name"}
            />
            {touched.firstName && errors.firstName && (
              <p className={styles.err}>{errors.firstName}</p>
            )}
          </label>

          {/*2. Second name*/}
          <label>
            <TextField
              className={styles.textfield}
              type={"text"}
              name={"lastName"}
              value={values.lastName}
              onChange={handleChange}
              placeholder={"Enter second name"}
            />
            {touched.lastName && errors.lastName && (
              <p className={styles.err}>{errors.lastName}</p>
            )}
          </label>

          {/*3. Gender*/}
          <select
            className={styles.select}
            value={values.gender}
            onChange={handleChange}
            name={"gender"}
            placeholder={"sex"}
          >
            <option hidden selected>
              Sex
            </option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>

          {/*4. Phone Number*/}
          <label>
            <TextField
              className={styles.textfield}
              type={"phone"}
              name={"phone"}
              value={values.phone}
              onChange={handleChange}
              placeholder={"Enter phone number"}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <p className={styles.err}>{errors.phone}</p>
            )}
          </label>

          {/*5. e-mail*/}
          <label>
            <TextField
              className={styles.textfield}
              type={"email"}
              name={"email"}
              value={values.email}
              onChange={handleChange}
              placeholder={"Enter e-mail"}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className={styles.err}>{errors.email}</p>
            )}
          </label>

          {/*6. Password*/}
          <label>
            {touched.password && errors.password && (
              <p className={styles.err}>{errors.password}</p>
            )}
            <TextField
              className={styles.textfield}
              type={isPasswordVisible ? "text" : "password"}
              name={"password"}
              value={values.password}
              onChange={handleChange}
              placeholder={"Enter password"}
              onBlur={handleBlur}
            />
          </label>

          <RadioGroup onClick={() => setVisible(!isPasswordVisible)}>
            <p>
              <VisibilityIcon />
              Show password
            </p>
          </RadioGroup>

          {/*7. Confirm Password*/}
          <label>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className={styles.err}>{errors.confirmPassword}</p>
            )}

            <TextField
              className={styles.textfield}
              type={isConfirmPasswordVisible ? "text" : "password"}
              name={"confirmPassword"}
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder={"Confirm password"}
              onBlur={handleBlur}
            />
          </label>
          <RadioGroup
            onClick={() => setConfirmVisible(!isConfirmPasswordVisible)}
          >
            <p>
              <VisibilityIcon />
              Show confirm password
            </p>
          </RadioGroup>

          <Button
            type="submit"
            endIcon={<HowToRegOutlinedIcon />}
            style={{
              backgroundColor: "rgba(122, 199, 81, 1)",
              color: "white",
              fontSize: 18,
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            Create Account
          </Button>

          <Button
            onClick={handleSubmit}
            role="submit"
            endIcon={<LoginOutlinedIcon />}
            style={{
              textTransform: "capitalize",
              color: "rgb(85, 85, 100)",
              fontSize: 10,
              marginTop: 5,
            }}
          >
            <Link
              to={ROUTE_NAMES.SIGN_IN}
              style={{ color: "rgb(85, 85, 100)" }}
            >
              Do you already have an account? Entrance
            </Link>
          </Button>

          <div style={{ margin: 10 }}>
            <p style={{ color: "green" }}>{values?.values?.message}</p>
            <p style={{ color: "red" }}>{values?.message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
