import Cookies from "js-cookie";
import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const savedTheme = Cookies.get("themes") || "light";
    setThemeMode(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (event) => {
    const newTheme =
      event.target.value || (themeMode === "light" ? "dark" : "light");
    setThemeMode(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    Cookies.set("themes", newTheme, { expires: 365 });
  };

  return (
    <div>
      <Button onClick={toggleTheme}>
        {themeMode === "light" ? (
          <Typography sx={{ color: "var(--text-dark)" }}>Dark Mode</Typography>
        ) : (
          <Typography sx={{ color: "var(--text-dark)" }}>Light Mode</Typography>
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
