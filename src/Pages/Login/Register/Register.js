import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {

  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                name="password"
                onChange={handleOnChange}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Confirm Password"
                name="password2"
                onChange={handleOnChange}
                type="password"
                variant="standard"
              />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </form>
          )}

          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://static.vecteezy.com/system/resources/previews/002/723/730/original/login-ui-ux-design-concept-and-illustration-website-login-ui-ux-design-concept-landing-page-login-screen-concept-free-vector.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
