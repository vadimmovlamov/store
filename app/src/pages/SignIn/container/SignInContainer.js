import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../redusers";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { useForm } from "../../../hooks/useForm";
import { Box, Button, TextField } from "@mui/material";
import PatternOutlinedIcon from "@mui/icons-material/PatternOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeIcon from "@mui/icons-material/Home";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const [signInForm, handleFormChange] = useForm({ email: "", password: "" });

  const handleSubmit = () => {
    dispatch(signIn(signInForm));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      <Link to={ROUTE_NAMES.HOME}>
        <Button startIcon={<HomeIcon />}></Button>
      </Link>
      <div
        style={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "solid",
          marginTop: 80,
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: "bold",
            lineHeight: 1.2,
            color: "#555555",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Log In
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="email"
            type="email"
            label="email"
            value={signInForm.email}
            onChange={handleFormChange}
          />
          <TextField
            name="password"
            type="password"
            label="password"
            value={signInForm.password}
            onChange={handleFormChange}
          />
        </Box>

        <Button endIcon={<PatternOutlinedIcon />} onClick={handleSubmit}>
          Log In
        </Button>
        <button onClick={handleSubmit}>Log In</button>
        <Button
          endIcon={<CreateOutlinedIcon />}
          style={{
            textTransform: "capitalize",
            color: "rgb(85, 85, 100)",
            fontSize: 10,
            marginTop: 5,
          }}
        >
          <Link to={ROUTE_NAMES.SIGN_UP} style={{ color: "rgb(85, 85, 100)" }}>
            Create your Account
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SignInContainer;
