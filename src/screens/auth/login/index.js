import Cookies from "js-cookie";
import React, { useState } from "react";
import { login } from "../../../api/endPoint";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "../../../components/Snackbar";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";

const LoginForm = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  // vaiables

  const navigate = useNavigate();
  const snackBarMessage = useSnackbar();
  const show = <Typography fontSize="16px">Show</Typography>;
  const hide = <Typography fontSize="16px">Hide</Typography>;
  // functions

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const validate = () => {
    const formErrors = { email: "", password: "" };
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";

    if (!password) formErrors.password = "Password is required";

    setErrors(formErrors);
    return !formErrors.email && !formErrors.password;
  };

  const postData = async (email, password) => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const res = await login(data);
      if (res?.status === 201) {
        Cookies.set("token", res?.data?.token, { expires: 2 });
        setEmail("");
        setPassword("");
        snackBarMessage({
          type: "success",
          message: res?.data?.message,
        });
        navigate("/home");
      } else {
        snackBarMessage({
          type: "error",
          message: res?.data?.message,
        });
      }
    } catch (error) {
      snackBarMessage({
        type: "error",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      postData(email, password);
    }
  };

  return (
    <Box className="authContainer">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <Box className="card">
            <Typography variant="h5" sx={{ marginBottom: "16px" }}>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                autoComplete="off"
                value={email}
                onChange={handleChange}
                helperText={errors.email ? errors.email : ""}
                error={Boolean(errors.email)}
              />

              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                helperText={errors.password ? errors.password : ""}
                error={Boolean(errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? hide : show}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                fullWidth
                variant="contained"
                className="button"
                type="submit"
                disabled={loading}
                endIcon={
                  loading ? (
                    <CircularProgress size={30} sx={{ color: "white" }} />
                  ) : null
                }
              >
                Login
              </Button>
            </form>
            <Grid
              container
              justifyContent="space-between"
              sx={{ marginTop: "16px" }}
            >
              <Grid item>
                <Link to="auth/forgotPassword" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
