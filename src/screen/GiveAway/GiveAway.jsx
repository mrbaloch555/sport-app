import React, { useState } from "react";
import Footer from "../../CommonComponents/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";

const GiveAway = () => {
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
          <div className="donate-container"></div>
          <div className="donate-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveAway;
