import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./GiveAwayForm.scss";
import FormInput from "../../CommonComponents/FormInput/FormInput";
import BlueBtn from "../../CommonComponents/BlueBtn/BlueBtn";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../CommonComponents/Footer/Footer";
import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";
const GiveAwayForm = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
  });
  const [result, setResult] = useState(false);
  const getData = (data) => {
    setResult(data);
  };
  return (
    <>
      <div className="giveaway">
        <div className="giveaway-topbar">
          <TopBar direact="Give away" onChange={getData} />
        </div>
        <div className={result ? "tst1" : ""}>
          <div class="mobile-marque">
            <Marque />
          </div>
          <br />
          <br />
          <div className="only-for-desktop">
            <div className="only-for-desktop-chat-icon">
              <FaTelegramPlane />
            </div>
          </div>
          <div className="deskone-chaticon-mobile">
            <div className="only-for-mobile">
              <div className="chat-icon">
                <FaTelegramPlane />
              </div>
            </div>
          </div>
          <div className="giveaway-container">
            <div className="giveawayform">
              <center>
                <p className="giveawayform-heading">GIVEAWAY</p>
              </center>
              <center>
                <p className="giveawayform-subheading">
                  Here’s how you can enter!
                </p>
              </center>

              <div className="form-width">
                <Formik
                  initialValues={{
                    fullName: "",
                    email: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {(formik) => (
                    <div>
                      <Form className="giveaway-form">
                        <FormInput
                          label="Full Name"
                          name="fullName"
                          type="text"
                        />
                        <FormInput
                          label="Email Address"
                          name="email"
                          type="email"
                        />

                        <div className="giveawayform-btn">
                          <center>
                            <BlueBtn type="submit" text="Enter" />
                          </center>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
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

export default GiveAwayForm;
