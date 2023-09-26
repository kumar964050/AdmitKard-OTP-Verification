import React from "react";

import Logo from "/Artboard 1.png";
import Button from "../Components/Buttons/Button";

const Home = () => {
  const data = localStorage.getItem("data");
  // login check
  if (data === null) {
    window.location.href = "/login";
  }

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <img className="logo" src={Logo} alt="admit-kard-logo" />
        <h1 className="title">Welcome to AdmitKard</h1>
        <p className="desc">
          <span>In order to provide you with a custom experience,</span>
          <br />
          <span className="hightlight">
            we need to ask you a few questions.
          </span>
        </p>
        <Button type="button">Get Started</Button>
        <span className="msg">*This will only take 5 min.</span>
      </form>
    </div>
  );
};

export default Home;
