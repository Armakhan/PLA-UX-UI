import React, { useState} from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import "../../assets/globalCss/global.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.scss";
import "../../components/ForgotPassword/ForgotPassword.css";
import {CONSTANT,FORGOTPASSWORD,CONSTANTOTP} from "../../Constants/Constant";
import { Password } from "primereact/password";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ForgotPassword() {
  const [employeeMailId, setEmployeeMailId] = useState("");
  const [isValidEmployeeId, setisValidEmployeeId] = useState(true);
  const [enterOtpErrorMessege, setEnterOtpErrorMessege] = useState(false);
  const [errorSkipUserLog, setErrorSkipUserLog] = useState(true);
  const [isOtpForget, setIsOtpForget] = useState(["", "", "", "", "", ""]);
  const [isValidNext, setIsValidNext] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [mailIdError, setMailIdError] = useState(false);
  const [istrue, setIsTrue] = useState(true);
  const [showOtpSendText, setShowOtpSendText] = useState(true);
  const [notRegistered, setNotRegistered] = useState(true);
  const [text, setText] = useState("");
  const [reText, setReText] = useState("");
  const [fData, setFData] = useState({
    password: "",
    cnfPassword: "",
  });
  const [errPassMsg, setErrPassMsg] = useState("");
  const [errCnfPassMsg, setErrCnfPassMsg] = useState("");
  //this function is used to check wheather a user skipping this field or not
  const skipChangeValueUser = () => {
    if (!employeeMailId.trim()) {
      setErrorSkipUserLog(false);
    } else {
      setErrorSkipUserLog(true);
    }};
  //this function is used to set the mail id
  const handleUsernameChangel = (e) => {
    const enteredUsername = e.target.value;
    setEmployeeMailId(enteredUsername);
    validateEmail(enteredUsername);
    setErrorSkipUserLog(true);
    setMailIdError(false);
    setNotRegistered(true);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setisValidEmployeeId(emailRegex.test(email));
  };
  //this function is used to set the otp
  const handleOnChange = (e, index) => {
    const updatedOtp = [...isOtpForget];
    updatedOtp[index] = e.target.value;
    setIsOtpForget(updatedOtp);
    setEnterOtpErrorMessege(false);
    setShowOtpSendText(true);
  };
  //this function is used to handle next button
  const handleNext = async () => {
    if (isValidEmployeeId === false) {
      setMailIdError(true);
      setNotRegistered(true);
    } else if (employeeMailId === "") {
      setErrorSkipUserLog(false);
    } else {
        const url = "http://192.168.29.35:8080/api/forgotPassword";
        const requ = { email: employeeMailId };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(requ),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.statusCode === 200) {
          setIsValidNext(true);
        } else {
          setIsValidNext(false);
          setNotRegistered(false);
        }
      
    }
  };
  //this function is used for done button
  const handleOnDone = async () => {
    const enteredOtp = isOtpForget.join("");
    if (enteredOtp.length === 6) {
      setIsDone(true);
      setIsValidNext(false);
      setIsTrue(false);
    } else if (enteredOtp.length !== 6 || enteredOtp === " ") {
      setIsDone(false);
      setEnterOtpErrorMessege(true);
      setShowOtpSendText(true);
    }
  };
  const skipChangeValuePassword = () => {
    if (fData.password === "") {
      setErrPassMsg(FORGOTPASSWORD.PASSWORD);
    }
  };
  const skipChangeValueConfirmPassword = () => {
    if (fData.cnfPassword === "") {
      setErrCnfPassMsg(FORGOTPASSWORD.REGCNFPASSWORDEMPTY);
    }
  };
  const handleChangePassword = async () => {
    if (text !== "" && reText !== "" && text === reText) {
        const requestPass = {
          verificationcode: isOtpForget.join(""),
          newpassword: reText,
          email: employeeMailId,
        };
        const response = await axios.post(
          "http://192.168.29.35:8080/api/confirmPassword",
          requestPass
        );
        if (response.status === 200) {
          toast.success(      
            "Success - Password changed successfully.", {
            className: "toastmessage",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
            background: 'yellow',
            type: "success",
            icon: <img className="toasticon" src={require('../../assets/images/Checkcircle.png')} alt="pic" />
          });
          setTimeout(function () {
            window.location.href = "/storemanagerlogin";
          }, 1500);
        } else if (response.status === 500) {
          console.log("user not Authorised");
        }
      
    } else if (text === "" && reText=== "") {
      setErrPassMsg(FORGOTPASSWORD.PASSWORD);
      setErrCnfPassMsg(FORGOTPASSWORD.REGCNFPASSWORDEMPTY);
    } 
  };
  const handleResendOTP = async () => {
    setShowOtpSendText(false);
    setIsOtpForget(["", "", "", "", "", ""]);
      const req = { email: employeeMailId };
       await axios.post(
        "http://192.168.29.35:8080/api/resendOTP",
        req
      );

  };
  return (
    <div className="RegisterPageStore">
      <div className="Rectangle">
        <div class="formgrid grid">
          <div className="entireboxleft">
            <div className="textarearowlog">
              <div className="picture">
                <Image
                  src={require("../../assets/images/login.png")}
                  height="457"
                  width="516"
                  alt="Image"
                />
              </div>
              <div className="picture">
                <div class="flex">
                  <Card className="cardwidth">
                    <div className="containerlog">
                      <Image
                        src={require("../../assets/images/ha.png")}
                        alt="Image"
                        width="100"
                        className="imagemleft imagetop"
                      />
                      <div className="dividermaindiv">
                        <div>|</div>
                        <div className="dividertwomargin">|</div>
                      </div>
                      <div className="gamifications">
                        <p1>{CONSTANT.SUSTAINABILITY}</p1>
                      </div>
                      <div className="gamificationh margingame">
                        <p1>{CONSTANT.GAMIFICATION}</p1>
                      </div>
                    </div>
                    {istrue && (
                      <div className="forgetpass">
                        {FORGOTPASSWORD.FORGOTPASSWORDL}
                      </div>
                    )}
                    {!isValidNext && istrue && (
                      <div className="plzentermailid">
                        {FORGOTPASSWORD.PLEASEENTER_REG_EMPID}
                      </div>
                    )}
                    {isValidNext && (
                      <p className="plzentermailid plzverificCode">
                        {FORGOTPASSWORD.PLEASEENTER_VERCODE}
                      </p>
                    )}
                    {isValidNext && (
                      <p className="wewillsendstyle">
                        {FORGOTPASSWORD.WEHAVESENT}
                      </p>
                    )}
                    {!isValidNext && istrue && (
                      <p className="wewillsendstyle">
                        {FORGOTPASSWORD.WEWILLSEND}
                      </p>
                    )}
                    <div class="formgrid grid">
                      {!isValidNext && istrue && (
                        <div class="field col-6 md:col-6">
                          <InputText
                            className="textareaboxlog p-inputtextlog"
                            id="email"
                            type="email"
                            onBlur={skipChangeValueUser}
                            placeholder="Enter Registered Email ID"
                            value={employeeMailId}
                            onChange={handleUsernameChangel}
                          />
                          <div>
                            {!notRegistered && errorSkipUserLog && (
                              <p className="notvalidemailid">
                                {FORGOTPASSWORD.EMAILIDNOTVALID}
                              </p>
                            )}
                            {!errorSkipUserLog ? (
                              <p className="errorStyle invaliduser">
                                {CONSTANT.EMAIL_VALID}
                              </p>
                            ) : (
                              mailIdError &&
                              notRegistered && (
                                <p className="errorStyle invaliduser">
                                  {FORGOTPASSWORD.PLEASEENTERSIX}
                                </p>)
                            )}
                          </div>
                        </div>
                      )}
                      {isValidNext && (
                        <div className="otp-input-c-forgot otpinputmargintop">
                          <style>
                            {Array.from({ length: 6 }).map(
                              (_, i) =>
                                `.otp-input-c-forgot .otp-input-${i} { width: ${
                                  60 / 15
                                }% }`
                            )}
                          </style>
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className={`otp-input-w input otp-input-${i}`}
                            >
                              <input
                                className="OtpinBackg"
                                type="text"
                                maxLength={1}
                                value={isOtpForget[i] || ""}
                                onChange={(e) => handleOnChange(e, i)}
                                autoFocus={i === 0 && 1}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {isValidNext && (
                        <>
                          <div className="mgleftdidforgot">
                            <p>{CONSTANTOTP.DIDNOTRECEIVE}</p>
                          </div>
                          <div className="resOtpForgot">
                            <p onClick={handleResendOTP}>
                              {CONSTANTOTP.RESEND}
                            </p>
                          </div>
                          <div className="otpSentAgainForgot">
                            <p>
                              {!showOtpSendText && CONSTANTOTP.OTPSENTAGAIN}
                            </p>
                          </div>
                        </>
                      )}
                      {!isDone &&
                        isValidNext &&
                        enterOtpErrorMessege &&
                        showOtpSendText && (
                          <p className="errorStyle errormsgotp">
                            {CONSTANTOTP.INVALIDOTP}
                          </p>
                        )}
                    </div>
                    <div>
                      {!isValidNext && istrue && (
                        <button
                          onClick={handleNext}
                          severity="success"
                          class="btnnextforgetpass"
                        >
                          {FORGOTPASSWORD.NEXT}
                        </button>
                      )}{" "}
                      {isValidNext && (
                        <button
                          onClick={handleOnDone}
                          severity="success"
                          class="btndoneforgetpass"
                        >
                          {FORGOTPASSWORD.DONE}
                        </button>
                      )}
                    </div>
                    {isDone && !isValidNext ? (
                      <>
                        <div>
                          <p className="forgetpass plzenterpasssword">
                            {FORGOTPASSWORD.PLEASEENTERPASSWORD}
                          </p>
                        </div>
                        <div class="field col enterpasswordbox">
                          <Password
                            className=" p-inputtextlog"
                            id="Password"
                            type="password"
                            onBlur={skipChangeValuePassword}
                            placeholder="Enter Password"
                            value={text}
                            feedback={false}
                            toggleMask={true}
                            onChange={(textP) => {
                              setText(textP.target.value);
                              const passwordRegex =
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
                              if (textP.target.value === "") {
                                setErrPassMsg(FORGOTPASSWORD.PASSWORD);
                                setFData({
                                  ...fData,
                                  password: textP.target.value,
                                });
                              } else if (textP.target.value.length < 8) {
                                setErrPassMsg(FORGOTPASSWORD.PASSWORD2);
                              } else if (
                                !passwordRegex.test(textP.target.value)
                              ) {
                                setErrPassMsg(FORGOTPASSWORD.PASSWORD3);
                              } else {
                                setFData({
                                  ...fData,
                                  password: textP.target.value,
                                });
                                setErrPassMsg("");
                              }
                            }}                   
                          />
                          {errPassMsg ? <p className="errorStyle errormessegePassRepass errormsgfontsize">{errPassMsg}</p> : null}
                        </div>
                        <div class="field col enterRepasswordbox">
                          <Password
                            className="p-inputtextlog"
                            id="password"
                            type="password"
                            onBlur={skipChangeValueConfirmPassword}
                            placeholder="Re-enter Password"
                            value={reText}
                            feedback={false}
                            toggleMask={true}
                            onChange={(textPa) => {
                              setReText(textPa.target.value);
                              if (textPa.target.value !== fData.password) {
                                setErrCnfPassMsg(FORGOTPASSWORD.REGCNFPASSWORD);
                                setFData({
                                  ...fData,
                                  cnfPassword: textPa.target.value,
                                });
                              } else {
                                setFData({
                                  ...fData,
                                  cnfPassword: textPa.target.value,
                                });
                                setErrCnfPassMsg("");
                              }
                            }}
                          />
                          {errCnfPassMsg ? <p className="errorStyle errormessegePassRepass">{errCnfPassMsg}</p> : null}
                        </div>
                        <div>
                        <ToastContainer rtl={false} autoClose={false} icon={true}/>
                          <button
                            onClick={handleChangePassword}
                            severity="success"
                            class="btnnextforgetpass changepasswordbuttonmargin"
                          >
                            {FORGOTPASSWORD.CHANGEPASSWORD}
                          </button>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
