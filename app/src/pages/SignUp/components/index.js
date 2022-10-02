import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { Box, Button, TextField } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ControlledRadioButtonsGroup from "../../../components/Gender";

import styles from "./styles.module.scss";
import HomeIcon from "@mui/icons-material/Home";

const SignUp = ({
  data,
  error,
  formValues,
  handleFormChange,
  handleSubmit,
  startCase,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME}>
        <Button startIcon={<HomeIcon />}></Button>
      </Link>
      <h1 className={styles.head}>Registration form</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {Object.entries(formValues).map(([fieldName, value]) => {
            return (
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  // className={styles.input}
                  key={fieldName}
                  type="text"
                  placeholder={startCase(fieldName)}
                  label={startCase(fieldName)}
                  name={fieldName}
                  value={value}
                  onChange={handleFormChange}
                />
              </Box>
            );
          })}

          <div className={styles.gender}>
            <ControlledRadioButtonsGroup />
          </div>

          <button role="submit" className={styles.button}>
            Create Account
          </button>

          <Button
            role="submit"
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
            <p style={{ color: "green" }}>{data?.data?.message}</p>
            <p style={{ color: "red" }}>{error?.message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
