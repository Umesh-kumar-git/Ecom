import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="main-section">
          <h2>VickyCode hub</h2>
          <div className="para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus s
            </p>
            <p>adipisicing elit. Minima, placeat.</p>
          </div>
          <div className="icons-links">
            <a href="https://www.facebook.com/profile.php?id=100007765271869">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/bickykumar541">
              <TwitterIcon />
            </a>

            <a href="https://www.instagram.com/vicky_codehub/">
              <InstagramIcon />
            </a>
            <a href="https://github.com/Umesh-kumar-git/foodzone">
              <GitHubIcon />
            </a>
            {/* <a href="#">
              <LinkedInIcon />
            </a> */}
          </div>
        </div>
        <div className="copy-right">
          CopyRight ©2022 VickyCodehub Design by Umesh kumar
        </div>
      </div>
    </>
  );
};

export default Footer