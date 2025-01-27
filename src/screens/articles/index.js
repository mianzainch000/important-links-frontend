import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="container">
      <Link
        to="https://www.freecodecamp.org/news/the-javascript-array-handbook"
        className="link"
      >
        Array Article
      </Link>
      <Link
        to="https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript"
        className="link"
      >
        Article Synchronous vs Asynchronous{" "}
      </Link>
      <Link
        to="https://editor.swagger.io/?_gl=1*1o03qna*_gcl_au*MTM1NzUyNDIzNS4xNzM2MzIyMjY1"
        className="link"
      >
        Swagger Article{" "}
      </Link>
      <Link to="https://javascript.info/" className="link">
        Modern JavaScript{" "}
      </Link>
      <Link
        to="https://platform.openai.com/docs/guides/text-generation"
        className="link"
      >
        Chatgpt Documentation{" "}
      </Link>
      <Link to="   https://nodecron.com/docs" className="link">
        NodeCron Documentation{" "}
      </Link>
    </div>
  );
};

export default Articles;
