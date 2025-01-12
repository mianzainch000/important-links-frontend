import React from "react";
import { Link } from "react-router-dom";

const CV = () => {
  return (
    <div className="container">
      <Link to="https://www.resumerpro.com" className="link">
        Resumerpro
      </Link>
      <Link to="https://app.flowcv.com/resumes" className="link">
        Flow CV
      </Link>
      <Link to="https://www.resumemate.io/resume-builder" className="link">
        Resumemate.io
      </Link>
      <Link
        to="https://www.canva.com/design/DAGL-TcpqLI/cyY2lDN08lfZFdqMzjmSbg/view?utm_content=DAGL-TcpqLI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
        className="link"
      >
        Canva CV Template
      </Link>
    </div>
  );
};

export default CV;
