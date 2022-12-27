import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { getValue } from "@testing-library/user-event/dist/utils";

export default function FormWithoutHookForm({ value }) {
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => {
    console.log(textValue);
  };
  const handleReset = () => setTextValue("");

   value.map((val) => {
   console.log(val)
  })

  return (
    <Paper>
      <h2>Form Demo</h2>
      <TextField
        onChange={onTextChange}
        value={value[0]}
        label={"Text Value"} //optional
      />
      <TextField
        onChange={onTextChange}
        value={value[1]}
        label={"Text Value"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
}
