import React from "react";
import CV from "../screens/cv";
import Mix from "../screens/mix";
import Home from "../screens/home";
import FESCO from "../screens/fesco";
import Login from "../screens/auth/login";
import Interviews from "../screens/interviews";
import MoviesLinks from "../screens/movies-links";
import IslamicLinks from "../screens/islamic-links";
import ResetPassword from "../screens/auth/resetPassword";
import ForgotPassword from "../screens/auth/forgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "../components/ProtectedRoutes/PublicRoute";
import PrivateRoute from "../components/ProtectedRoutes/PrivateRoute";

export const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<PublicRoute />}>
              <Route>
                <Route path="/" element={<Login />} />
                <Route
                  path="auth/forgotPassword"
                  element={<ForgotPassword />}
                />
                <Route path="auth/resetPassword" element={<ResetPassword />} />
              </Route>
            </Route>
          </Route>

          {/* Private routes  */}
          <Route element={<PrivateRoute />}>
            <Route>
              <Route path="/islamic-links" element={<IslamicLinks />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/home" element={<Home />} />
              <Route path="/fesco" element={<FESCO />} />
              <Route path="/mix" element={<Mix />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/movies-links" element={<MoviesLinks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
