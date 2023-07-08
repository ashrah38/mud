import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = ({ showForm }) => {
  return (
    <div className="footer">
      <div className="f-container-1">
        <div className="f-container-1-top">
          <div className="logo footer-logo">Clay</div>
          <div className="links-container lc-footer">
            <a className="toolbar-link" href="#who-we-are">
              Who we are
            </a>
            <a className="toolbar-link" href="#why-clay">
              Why Clay
            </a>
            <a className="toolbar-link" href="#what-we-offer">
              What we offer
            </a>
            <a className="toolbar-link" href="#form" onClick={showForm}>
              Book a demo
            </a>
          </div>
        </div>
        <div className="f-container-1-bottom">
          <div className="contacts">
            <div className="socials">
              <FacebookIcon fontSize="small" sx={{ color: "#fff" }} />
              <TwitterIcon fontSize="small" sx={{ color: "#fff" }} />
              <InstagramIcon fontSize="small" sx={{ color: "#fff" }} />
              <LinkedInIcon fontSize="small" sx={{ color: "#fff" }} />
            </div>
            <div className="locations">Atlanta | Seattle | Toronto | Mauritius</div>
          </div>
          <div className="copyright">Mockup of launchclay.com - They Reserve All Rights.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
