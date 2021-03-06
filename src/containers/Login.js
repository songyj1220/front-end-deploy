import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import { Auth } from "aws-amplify";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  //validate login information. If the login information is not valid, prompt error message.
  //Dante said we just need one generic login id&pw for now, so I just set it to id: "test@gmail.com" and pw: 0000
  function handleSubmit(event) {
    event.preventDefault();
    if (email === "test@gmail.com" && password === "0000")
      props.history.push("/menu");
    else alert("Not a valid login information. Pleaser try again.");
    /**try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }**/
  }

  return (
    <div className="Login">
      <h1 className="loginHeader">UCI Medical Center Radiation Oncology</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
