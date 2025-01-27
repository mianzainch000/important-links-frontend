import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link to="https://islamic-research.netlify.app" className="link">
        Islamic Research
      </Link>

      <Link to="/islamic-links" className="link">
        Islamic-Links{" "}
      </Link>

      <Link to="/fesco" className="link">
        FESCO{" "}
      </Link>

      <Link to="/cv+movie-links" className="link">
        CV + MoviesLinks{" "}
      </Link>

      <Link to="/mix" className="link">
        Mix{" "}
      </Link>

      <Link to="/interviews" className="link">
        Interviews
      </Link>
    </div>
  );
};

export default Home;
