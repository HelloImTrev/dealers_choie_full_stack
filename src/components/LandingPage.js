import React from "react";
import LandingNav from "./LandingNav";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-background"></div>
      <div className="landing-page-circle"></div>
      <div>
        <h1>tuesday.com</h1>
        <h4>*a monday.com knock-off*</h4>
        <LandingNav />
        <p className="footer">Built very incrementally</p>
      </div>
    </div>
  );
};

export default LandingPage;
