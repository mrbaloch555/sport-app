import React, { useState } from "react";
import "./Donate.scss";
import Footer from "../../CommonComponents/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import Marque from "../../components/Marque/Marque";

const Donate = () => {
  const [result, setResult] = useState(false);
  const getData = (data) => {
    setResult(data);
  };
  return (
    <>
      <div className="donate">
        <div className="donate-topbar">
          <TopBar onChange={getData} />
        </div>
        <div className={result ? "tst1" : ""}>
          <div class="mobile-marque">
            <Marque />
          </div>
          <div className="donate-line">
            <h4>Donate</h4>
            <div className="donate-line-border"></div>
          </div>
          <div className="donate-content">
            <div className="donate-container">
              <h4>Enter Amount:</h4>
              <div className="donate-container-box">
                <button>&pound; 2</button>
                <button>&pound; 5</button>
                <button>&pound; 10</button>
                <button>&pound; 15</button>
                <button>&pound; 20</button>
                <button>Other Amount</button>
              </div>
              <div className="donate-container-field">
                <h4>&pound;</h4>
              </div>
              <div className="donate-container-duration">
                <button>One-time</button>
                <button>Monthly</button>
              </div>
              <div className="donate-container-pay">
                <button>pay by card</button>
              </div>
              <div className=" donate-container-or">
                <center>OR</center>
              </div>
              <div className="donate-container-paypal">
                <button>Paypal</button>
              </div>
              <div className="donate-container-bitcoin">
                <button>bitcoin</button>
              </div>
              <div className="donate-container-stripe">
                <button>stripe</button>
              </div>
              <div className="donate-container-share">
                <button>SHARE WEBSITE</button>
              </div>
            </div>
          </div>
          <div className="donate-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
