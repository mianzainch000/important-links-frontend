import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div className="container">
      <Link to="https://www.watchonlinemovies.com.pk/" className="link">
        onlinemovies
      </Link>
      <Link to="https://themoviezflix.ae.org/about-us/" className="link">
        movieflix
      </Link>
      <Link to="https://kickasstorrents.to/" className="link">
        kickasstorrents
      </Link>
      <Link to="https://netfree2.cc/home/" className="link">
        NetMirror
      </Link>
      <Link to="https://moviebox.ng//" className="link">
        MovieBox
      </Link>
    </div>
  );
};

export default Movies;
