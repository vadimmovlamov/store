import { useState } from "react";

const useInput = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    error,
  };
};

export default useInput;
