import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          style={{ border: "none" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={age}>English</MenuItem>
          <MenuItem value={20}>Russian</MenuItem>
          <MenuItem value={30}>China</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
