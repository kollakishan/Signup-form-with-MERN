import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./Signin.css";
import Button from "@material-ui/core/Button";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password]);

  const submitSignin = () => {
    const data = {
      username: username,
      password: password,
    };

    fetch("/signin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.status == 201 ? setSubmitSuccess(true) : setSubmitSuccess(false)
    );

    setPassword("");
    setUsername("");
  };

  return (
    <Paper className='paper__body' elevation={3}>
      <div className='signin__form'>
        <TextField
          style={{ marginBottom: "1em" }}
          label='User Name'
          variant='outlined'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "1em" }}
          label='Password'
          variant='outlined'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={submitSignin}
          variant='contained'
          color='primary'
          disabled={submitDisabled}
        >
          Sign In
        </Button>
        <div style={{ marginTop: "10px" }}>
          New user? <a href='/signup/new'>SignUp</a>
        </div>
        {submitSuccess ? (
          <div style={{ color: "green" }}>Success !!!!!!!!!!!</div>
        ) : null}
      </div>
    </Paper>
  );
};

export default Signin;
