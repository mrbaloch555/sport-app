import React, { useState, useEffect } from "react";
import "./Chatango.scss";
import chatango from "../../assest/chatango.svg";
// React Icons
import { BsEmojiLaughing } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FiArrowUp } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
//
const Chatango = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatbox, setchatbox] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  // For Chat Box
  const showchatbox = () => setchatbox(!chatbox);

  return (
    <>
      {isVisible && (
        <div>
          <div className={`${chatbox ? "chatango-up" : "chatango"}`}>
            <div className="chatango-icon">
              <img src={chatango} alt="chatango" onClick={showchatbox} />
            </div>
          </div>
          <div className="chat">
            <div className={`${chatbox ? "chat-box" : "chat-non"}`}>
              <div className="chat-box-top">
                <center>Chat</center>
              </div>
              <div className="chat-box-chat"></div>
              <div className="chat-box-input">
                <div className="chat-box-input-container">
                  <BsEmojiLaughing style={{ fontSize: "1.5rem" }} />
                  <ImAttachment
                    style={{ color: "white", fontSize: "1.5rem" }}
                  />
                  <input type="text" placeholder="Type message here" />
                  <FiArrowUp className="chat-box-input-container-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatango;
