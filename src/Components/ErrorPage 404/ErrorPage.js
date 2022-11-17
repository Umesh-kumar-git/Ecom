import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="Errorpage">
      <div className="404">
        <h1 className="h1">404</h1>
      </div>
      <div className="opps">
        
        <span className="o">o</span>oops!!
      </div>
      <p className="anavailable">that page doesn't exit or unavailable.</p>
    </div>
  );
};

export default ErrorPage;
