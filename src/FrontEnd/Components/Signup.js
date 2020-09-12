import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";
import Button from "@material-ui/core/Button";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenterpassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  useEffect(() => {
    if (
      username.length > 0 &&
      password.length > 0 &&
      reenterpassword.length > 0 &&
      email.length > 0
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password, reenterpassword, email]);

  const submitSignup = () => {
    const data = {
      username: username,
      password: password,
      reenterpassword: reenterpassword,
      email: email,
    };

    fetch("/signup/new", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setServerMessage(data.message));
    setEmail("");
    setReenterpassword("");
    setPassword("");
    setUsername("");
  };

  return (
    <Paper className='paper__body' elevation={3}>
      <div className='signup__form'>
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
        <TextField
          style={{ marginBottom: "1em" }}
          label='Re Enter Password'
          variant='outlined'
          value={reenterpassword}
          onChange={(e) => setReenterpassword(e.target.value)}
        />
        <TextField
          style={{ marginBottom: "1em" }}
          label='E-Mail'
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={submitSignup}
          variant='contained'
          color='primary'
          disabled={submitDisabled}
        >
          Sign Up
        </Button>
        <div style={{ marginTop: "10px" }}>
          Existing user? <a href='/signin'>Signin</a>
        </div>
        {serverMessage.length > 0 ? (
          <div style={{ color: "dodgerblue", overflowWrap: "break-word" }}>
            {serverMessage}
          </div>
        ) : null}
      </div>
    </Paper>
  );
};

export default Signup;
