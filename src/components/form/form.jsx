import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { CssBaseline } from "@mui/material";
import useStyles from "../../styles";
export default function FormWithoutHookForm({ value }) {
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => {
    console.log(textValue);
  };
  const handleReset = () => setTextValue("");

  value.map((val) => {
    console.log(val);
  });
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <Paper className={classes.paper}>
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
      </CssBaseline>
    </>
  );
}
