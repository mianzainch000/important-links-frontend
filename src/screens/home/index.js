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

      <Link to="https://maps.app.goo.gl/5kyAxTERAuFsx8Nw8" className="link">
        My Home Address
      </Link>
      <Link to="/cv" className="link">
        CV{" "}
      </Link>

      <Link to="/movies-links" className="link">
        Movies-Links{" "}
      </Link>

      <Link to="/articles" className="link">
        Articles{" "}
      </Link>

      <Link to="/mix" className="link">
        Mix{" "}
      </Link>

      <Link
        to="https://en1.savefrom.net/102-youtube-music-downloader-2Ck.html"
        className="link"
      >
        Dowmload viedo
      </Link>

      <Link to="/interviews" className="link">
        Interviews
      </Link>
    </div>
  );
};

export default Home;
