import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import "./portfolio.css";
import "./Postfolio.scss";

const Portfolio = () => {
  return (
    <div className="inner-portdolio">
      <h1>My Portfolios</h1>

      <div className="portfolio-row">
        <div className="portfolio-box">
          <figure class="imghvr-zoom-out">
            <img src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.6435-0/p480x480/181390689_1127691517724357_1585998089991991113_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=2Gi80CZ_L1IAX8TuaIQ&_nc_ht=scontent.fdac38-1.fna&tp=6&oh=5006b57aec16ab10509c866342f63c6b&oe=60B3B883" />
            <figcaption>
              <h1 className="jwolt">Hello</h1>
            </figcaption>
          </figure>
          <h3>Child Care Agency Website</h3>
          <p>
            This is a child care website where people can book a service and
            place a review. The website admin can handle the entire website from
            the admin dashboard without touching the source code. This website
            is 100% mobile responsive.
          </p>
          <div className="portfolio-box-footer">
            <a
              href="https://assignment-11-75878.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <RiComputerLine className="portfolio-box-footer-icon" />
            </a>

            <AiFillGithub className="portfolio-box-footer-icon" />
          </div>
        </div>
        <div className="portfolio-box">
          <figure class="imghvr-zoom-out">
            <img src="https://scontent.fdac38-1.fna.fbcdn.net/v/t1.6435-0/p480x480/180957205_1127691664391009_6235763715343558037_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=2u5y2ZoG8W4AX8u8fys&_nc_ht=scontent.fdac38-1.fna&tp=6&oh=408be487ace65d86af7fbd36c9b23f8b&oe=60B31AC3" />
            <figcaption>
              <h1 className="jwolt">Hello</h1>
            </figcaption>
          </figure>
          <h3>eCommerce Website</h3>
          <p>
            This is an eCommerce website developed by one of the most popular
            eCommerce platforms, Woo-Commerce. The website has an incredible
            look and easy management system. This website is 100% responsive for
            all devices and comfortable with all the major browsers. it has ajax
            search functionality as well.
          </p>
          <div className="portfolio-box-footer">
            <a href="https://www.oitaden.com/" target="_blank" rel="noreferrer">
              <RiComputerLine className="portfolio-box-footer-icon" />
            </a>

            <AiFillGithub className="portfolio-box-footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
