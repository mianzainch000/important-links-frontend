import React from "react";
import { Link } from "react-router-dom";

const Islamic = () => {
  return (
    <div className="container">
      <Link to="https://islamic-research-next-js.netlify.app/" className="link">
        Islamic Research Old Design
      </Link>

      <Link to="https://islamic-research-old.netlify.app/" className="link">
        Old Islamic Research
      </Link>

      <Link to="https://islamicurdubooks.com" className="link">
        Search Hadess
      </Link>

      <Link
        to="https://islamicurdubooks.com/hadith/ad.php?bsc_id=14644&bookid=9"
        className="link"
      >
        The narration of seeing the Messenger of Allah in a dream
      </Link>

      <Link
        to="https://youtu.be/65h4pdw6B_c?si=fFguy-IALOyp373j"
        className="link"
      >
        Ayatul kursi
      </Link>

      <Link to="https://www.youtube.com/watch?v=WT54-syfquk" className="link">
        Surah Mulk
      </Link>
    </div>
  );
};

export default Islamic;
