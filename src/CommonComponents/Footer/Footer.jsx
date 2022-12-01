import React from "react";
import Logo from "../../assest/logo.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiTiktok, SiTelegram } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <dv className="footer-container-left">
            <div className="footer-container-left-logo">
              <img src={Logo} alt="" />
              <div className="footer-container-left-logo-icons">
                <BsTwitter />
                <BsFacebook />
                <FaDiscord />
                <BsInstagram />
                <SiTiktok />
                <SiTelegram />
              </div>
            </div>
            <div className="footer-container-left-content">
              <h2 className="footer-container-left-content-heading">
                Disclaimer
              </h2>
              <p className="footer-container-left-content-para">
                AJ Sports merely links/embeds content uploaded to popular media
                hosting websites such Vimeo.com, Dailymotion.com, Youtube.com,
                twitch.tv, reddit.com, etc. AJ Sports does not host any
                audio-visual content itself and has no ability to modify such
                content. We thus cannot accept any liability for the content
                transmitted by others as we are not affiliated nor endorsed by
                the external content. All content is copyright of their
                respective owners. AJ Sports operates as a search engine for
                streams and videos already hosted publicly on the world wide
                web. For any legal issues please contact appropriate media file
                owners.
              </p>
              <p className="footer-container-left-content-email">
                Email : info@ajsports.tv
              </p>
              <div className="footer-container-left-content-empty">
                <a
                  href="//www.dmca.com/Protection/Status.aspx?ID=002505e4-50e2-4de5-849b-394af1373ce5"
                  target="_blank"
                  className="footer-container-left-content-empty-first"
                >
                  Protected
                </a>

                <a
                  href="https://images.dmca.com/Badges/dmca_protected_sml_120am.png?ID=002505e4-50e2-4de5-849b-394af1373ce5"
                  target="_blank"
                  className="footer-container-left-content-empty-second"
                >
                  DMCA
                </a>
              </div>
            </div>
          </dv>

          <div className="footer-container-right">
            <div className="footer-container-right-list">
              <h5>Quick Menus</h5>
              <p className="footer-container-right-list-p">
                <Link to="/"> About Us</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/contactus">Contact Us</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/donate">Donate </Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/donate">Give Away</Link>
              </p>
            </div>
            <div className="footer-container-right-list">
              <h5>Links</h5>
              <p className="footer-container-right-list-p">
                <Link>Terms of Service</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link>Privacy Policy</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link>Handbook</Link>
              </p>
            </div>
            <div className="footer-container-right-list">
              <h5>Company</h5>
              <p className="footer-container-right-list-p">
                <Link to="/">Donate Us</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/contactus">Contact Us</Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/">FAQ </Link>
              </p>
              <p className="footer-container-right-list-p">
                <Link to="/">Dummy Data here</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
