import { TextField } from "@mui/material";
import styles from "../../pages/SignUp/components/styles.module.scss";

const formInput = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <label>
      <TextField
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
  );
};
