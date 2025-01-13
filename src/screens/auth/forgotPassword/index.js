import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../api/endPoint";
import { useSnackbar } from "../../../components/Snackbar";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";

const ForgotPasswordForm = () => {
  // states
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "" });
  // vaiables
  const snackBarMessage = useSnackbar();
  // functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
  };

  const validate = () => {
    const formErrors = { email: "" };
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";

    setErrors(formErrors);
    return !formErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      postData(email);
    }
  };

  const postData = async (email) => {
    try {
      const data = {
        email: email,
      };
      const res = await forgotPassword(data);
      if (res?.status === 201) {
        snackBarMessage({
          type: "success",
          message: res?.data?.message,
        });
        setEmail("");
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
              Forgot Email Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                autoComplete="off"
                margin="normal"
                value={email}
                onChange={handleChange}
                helperText={errors.email ? errors.email : ""}
                error={Boolean(errors.email)}
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
                Verify
              </Button>{" "}
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

export default ForgotPasswordForm;
