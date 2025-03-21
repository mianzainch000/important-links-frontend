import "./App.css";
import Cookies from "js-cookie";
import { Router } from "./routes";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import ThemeToggle from "./components/ToogleTheme";
import { useSnackbar } from "./components/Snackbar";

function App() {
  const snackBarMessage = useSnackbar();
  const isAuthenticated = !!Cookies.get("token");

  const handleLogout = async () => {
    try {
      Cookies.remove("token", "themes");
      snackBarMessage({
        type: "success",
        message: "Logout successfully",
      });
      <Link to="/"></Link>;
    } catch (error) {
      snackBarMessage({
        type: "error",
        message: "Logout Failed",
      });
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Box   sx={{
          gap: "8px",
          display: "flex",
          position: "fixed",
          marginTop: "300px", 
          flexDirection: "row",
          alignItems: "flex-start", 
          transform: "rotate(270deg)", 
          transformOrigin: "top left", 
          justifyContent: "flex-start", 
        }}
      >
          <Button
            sx={{
              cursor: "pointer",
              color: "var(--text-dark)",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            sx={{
              cursor: "pointer",
            }}
          >
            <ThemeToggle />
          </Button>
        </Box>
      ) : (
        ""
      )}

      <Router />
    </>
  );
}

export default App;
