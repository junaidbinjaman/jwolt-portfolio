import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-icons">
        <ul className="social-icon-ul">
          <li>
            <a
              href="https://www.facebook.com/jwolt.9/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <span> - Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/junaid-bin-jaman-5b75a7181/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
              <span> - LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jwolt65859"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
              <span> - Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jwolt6/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <span> - Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
