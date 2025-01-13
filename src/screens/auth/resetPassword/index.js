import React, { useState } from "react";
import { resetPassword } from "../../../api/endPoint";
import { Link, useSearchParams } from "react-router-dom";
import { useSnackbar } from "../../../components/Snackbar";

import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";

const ResetPasswordForm = () => {
  // states
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });
  // vaiables
  const snackBarMessage = useSnackbar();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const show = <Typography fontSize="16px">Show</Typography>;
  const hide = <Typography fontSize="16px">Hide</Typography>;
  // functions
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const validate = () => {
    const formErrors = { password: "", confirmPassword: "" };
    if (!password) formErrors.password = "Password is required";
    if (!confirmPassword)
      formErrors.confirmPassword = "Confirm Password is required";
    else if (confirmPassword !== password)
      formErrors.confirmPassword = "Passwords do not match";

    setErrors(formErrors);
    return !formErrors.password && !formErrors.confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      postData(password, token);
    }
  };

  const postData = async (password, token) => {
    setLoading(true);
    try {
      if (!token) {
        snackBarMessage({
          type: "error",
          message: "Invalid or missing token",
        });
        return;
      }

      const data = {
        newPassword: password,
      };

      const res = await resetPassword(data, token);
      if (res?.status === 201) {
        snackBarMessage({
          type: "success",
          message: res?.data?.message,
        });
        setPassword("");
        setConfirmPassword("");
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
  return (
   <Box className="authContainer"sx={{height:{lg:"100vh",md:"100vh",sm:"100vh",xs:"75vh"}}}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={11} sm={8} md={6} lg={4}>
          <Box className="card">
            <Typography variant="h5" sx={{ marginBottom: "16px" }}>
              Reset Password Form
            </Typography>
            <form onSubmit={handleSubmit}>
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
                helperText={errors.password}
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
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                autoComplete="off"
                margin="normal"
                value={confirmPassword}
                onChange={handleChange}
                helperText={errors.confirmPassword}
                error={Boolean(errors.confirmPassword)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? hide : show}
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
                Reset Password
              </Button>
            </form>
            <Grid
              container
              justifyContent="space-between"
              sx={{ marginTop: "16px" }}
            >
              <Grid item>
                <Link to="/" variant="body2">
                  Go back to login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPasswordForm;
