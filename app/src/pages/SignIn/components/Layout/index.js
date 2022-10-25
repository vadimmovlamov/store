import { Link } from "react-router-dom";
import startCase from "lodash/startCase";

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import SnackbarWithAlert from "../../../../components/Snackbar";
import Spinner from "../../../../components/Spinner";

import Button from "@mui/material/Button";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import styles from "./styles.module.scss";

const SignInLayout = ({
  formik,
  error,
  errors,
  touched,
  onClose,
  isAuth,
  isLoading,
  valuePassword,
  onClickShowPassword,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogContent}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <TextField
            id="email"
            name="email"
            type="email"
            color={errors ? "error" : "success"}
            label={
              errors && touched
                ? `${startCase("email")}: ${errors}`
                : startCase("email")
            }
            errors={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className={styles.input}
          />

          <FormControl variant="standard">
            <InputLabel color={errors ? "error" : "success"}>
              {errors && touched ? `Password: ${errors}` : ""}
            </InputLabel>

            <TextField
              id="password"
              name="password"
              label="Password"
              autoComplete="off"
              type={valuePassword.showPassword ? "text" : "password"}
              color={errors ? "error" : "success"}
              errors={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.input}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onClickShowPassword}>
                    {valuePassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            type="submit"
            onClick={onClose}
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
        </form>
      </div>

      <Button endIcon={<CreateOutlinedIcon />} className={styles.bigButton}>
        <Link to={ROUTE_NAMES.SIGN_UP} className={styles.linktext}>
          create a new account
        </Link>
      </Button>

      {isLoading && <Spinner />}

      {isAuth && (
        <SnackbarWithAlert
          timeAlert={2000}
          textAlert="Success. This is a success login.Go to shopping!"
          severity="success"
          style={{ backgroundColor: "green", color: "white" }}
        />
      )}

      {error && (
        <SnackbarWithAlert
          timeAlert={3000}
          textAlert={error.message}
          severity="error"
        />
      )}
    </div>
  );
};

export default SignInLayout;
