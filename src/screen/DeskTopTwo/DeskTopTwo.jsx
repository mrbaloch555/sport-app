import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./DeskTopTwo.scss";
// Common Components
import Add from "../../CommonComponents/Adds/Add";

import FlexAdd from "../../CommonComponents/FlexAdd/FlexAdd";
import Footer from "../../CommonComponents/Footer/Footer";

// Components
import LeftSide from "../../components/LeftSide/LeftSide";
import Middle from "../../components/Middle/Middle";
import RightSide from "../../components/RightSide/RightSide";
import TextArea from "../../components/TextArea/TextArea";
import Progress from "../../components/Progress/Progress";
import MiddleHeader from "../../CommonComponents/MiddleHeader/MiddleHeader";
import Videos from "../../components/Videos/Videos";
import Subsitutes from "../../CommonComponents/Subsitutes/Subsitutes";
import TopBar from "../../components/TopBar/TopBar";
import Stats from "../../CommonComponents/Stats/Stats";
// Material UI Tabs
import white from "../../assest/white.png";
import red from "../../assest/red.png";
import Direaction from "../../components/Direaction/Direaction";
import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";

import Chatango from "../../components/Chatango/Chatango";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const DeskTopTwo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [result, setResult] = useState(false);
  const getData = (data) => {
    setResult(data);
  };
  return (
    <>
      <div className="desktwo">
        <div className="desktwo-top">
          <TopBar onChange={getData} />
        </div>

        <div className={result ? "tst1" : ""}>
          <Chatango />
          <div class="mobile-marque">
            <Marque />
          </div>
          {/* <div>
            <center>
              <Direaction next="Watch" />
            </center>
          </div> */}
          <div className="desktwo-middle">
            <div className="desktwo-middle-left">
              <LeftSide>
                <Add size="large" />
                <Add size="small" />
                <TextArea />
                <Add size="large" />
                <Add size="small" />
                <TextArea />
              </LeftSide>
            </div>
            <div className="desktwo-middle-middle">
              <Middle>
                <center>
                  <Direaction next="Watch" />
                </center>

                <div className="deskone-chaticon-mobile">
                  <div className="only-for-mobile">
                    <div className="chat-icon">
                      <FaTelegramPlane />
                    </div>
                  </div>
                </div>
                <div className="display-non-adds">
                  <FlexAdd />
                </div>
                <div className="desktop-middle-middle-margintop">
                  <MiddleHeader />
                  <Videos link="https://www.youtube.com/embed/nLxmuh6wCVY" />

                  <div className="server-btns">
                    <button className="server-btns-active">Server 1</button>
                    <button>Server 2</button>
                    <button>Server 3</button>
                    <button>Server 4</button>
                  </div>

                  <br />
                  <br />

                  <Box>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      TabIndicatorProps={{
                        sx: {
                          backgroundColor: "#03a1cd",
                        },
                      }}
                      sx={{
                        "& button": {
                          color: "white",
                          fontSize: "1.5rem",
                          fontWeight: "400",
                        },
                        "& button:hover": { color: "#03a1cd" },
                        "& button:focus": { color: "#03a1cd" },
                        "& button:active": {
                          color: "#03a1cd",
                          fontWeight: "400",
                        },
                      }}
                      centered
                    >
                      <Tab
                        label="LINEUPS"
                        style={{
                          color: value === 0 ? "#03a1cd" : "white",
                        }}
                      />
                      <Tab
                        label="STATS"
                        id="stat-tab-m"
                        style={{
                          color: value === 1 ? "#03a1cd" : "white",
                        }}
                      />
                      <Tab
                        label="SUBSITUTES"
                        style={{
                          color: value === 2 ? "#03a1cd" : "white",
                        }}
                      />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <div className="flex-div">
                      <div className="red-shirt">
                        <div className="name1">
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                          <div className="name1-item">
                            <img src={red} alt="red-shirt" className="" />
                            <p>C.Ronaldo</p>
                          </div>
                        </div>
                      </div>
                      <div className="field_p">
                        <div className="red_player1">
                          <img src={red} className="" alt="red-shirt" />
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player2">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player3">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player4">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player5">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player6">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player7">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player8">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player9">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player10">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="red_player11">
                          <img src={red} alt="red-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>

                        <div className="field up">
                          <div id="penalty1"></div>
                        </div>
                        <div className="circle"></div>
                        <div className="field down">
                          <div id="penalty2"></div>
                        </div>
                        <div className="white_player11">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player10">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player9">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player8">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player7">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player6">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player5">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player4">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player3">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player2">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                        <div className="white_player1">
                          <img src={white} alt="white-shirt"></img>
                          <p className="playerName">Lorem</p>
                        </div>
                      </div>
                      <div className="white-shirt">
                        <div className="name2">
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>{" "}
                          <div className="name2-item">
                            <img src={white} alt="white-shirt" />
                            <p>M.Salah</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="desktoptwo-progress">
                      <Progress />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Stats left="0" middle="Shots" right="0" />
                    <Stats left="0" middle="Shots on target" right="0" />
                    <Stats left="0" middle="Possession" right="0" />
                    <Stats left="0" middle="passes" right="0" />
                    <Stats left="0" middle="pass accuracy" right="0" />
                    <Stats left="0" middle="fouls" right="0" />
                    <Stats left="0" middle="offside" right="0" />
                    <Stats left="0" middle="corner" right="0" />
                    <div className="desktoptwo-progress">
                      <Progress />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <div className="desktoptwo-subsitutes">
                      <Subsitutes />
                      <Subsitutes />
                      <Subsitutes />
                      <Subsitutes />
                      <Subsitutes />
                      <Subsitutes />
                    </div>
                    <div className="desktoptwo-progress">
                      <Progress />
                    </div>
                  </TabPanel>

                  <FlexAdd />
                  <div className="display-non-adds">
                    <FlexAdd />
                  </div>
                </div>
              </Middle>
            </div>
            <div className="desktwo-middle-right">
              <RightSide>
                <div className="only-for-desktop">
                  <div className="only-for-desktop-chat-icon">
                    <FaTelegramPlane />
                  </div>
                </div>
                <Add size="full" />
                <Add size="full" />
                <Add size="full" />
                <Add size="full" />
              </RightSide>
            </div>
          </div>
          <div className="desktwo-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTopTwo;
