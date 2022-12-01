import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import DeskTopFive from "./screen/DeskTopFive/DeskTopFive";

import DeskTopTwo from "./screen/DeskTopTwo/DeskTopTwo";
import DeskTopOne from "./screen/DeskTopOne/DeskTopOne";
import SchudleTable from "./screen/SchudleTable/SchudleTable";
import ContactUs from "./screen/ContactUs/ContactUs";
// import DonateForm from "./screen/DonateForm/DonateForm";
// import GiveAwayForm from "./screen/GiveAwayForm/GiveAwayForm";
import NewsPage from "./screen/NewsPage/NewsPage";
import GoTo from "./components/GoTo/GoTo";
import Donate from "./screen/Donate/Donate";
import GiveAway from "./screen/GiveAway/GiveAway";
const Routess = () => {
  return (
    <>
      <GoTo />
      <Router>
        <Routes>
          <Route path="/" element={<DeskTopOne />}></Route>
          {/* MenuItem Routes */}
          <Route path="/nfl" element={<DeskTopOne />}></Route>
          <Route path="/basketball" element={<DeskTopOne />}></Route>
          <Route path="/football" element={<DeskTopOne />}></Route>
          <Route path="/boxing" element={<DeskTopOne />}></Route>
          <Route path="/other" element={<DeskTopOne />}></Route>
          <Route path="/watch" element={<DeskTopTwo />}></Route>
          <Route path="/channel" element={<DeskTopFive />}></Route>
          <Route path="/statistics" element={<SchudleTable />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          {/* <Route path="/donate" element={<DonateForm />}></Route>*/}
          {/* <Route path="/giveaway" element={<GiveAwayForm />}></Route> */}
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/giveaway" element={<GiveAway />}></Route>
          <Route
            path="/not-found"
            element={<h1 className="text-white">Not found</h1>}
          />
          {/* <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<Navigate to="/not-found" />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
