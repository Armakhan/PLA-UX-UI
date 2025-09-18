import React, { useState} from "react";
import { Image } from "primereact/image";
import "../../assets/globalCss/global.css";
import "../../components/OtpPage/OtpPage.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.scss";
import { Card } from "primereact/card";
import { useParams,useNavigate } from "react-router-dom";
import { CONSTANT,CONSTANTOTP } from "../../Constants/Constant";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OtpPage = () => {
  const navigate=useNavigate();
  const [isOtp, setIsOtp] = useState(["", "", "", "", "", ""]);
  const [errorInvalid, setErrorInvalid] = useState(false);
  const [showError, setShowError] = useState(false);
  const { email } = useParams();
  const {employeeId} = useParams();
  const handleOnChange = (e, index) => {
    const updatedOtp = [...isOtp];
    updatedOtp[index] = e.target.value;
    setIsOtp(updatedOtp);
    setErrorInvalid(false);
  };
  //this function is used to verify the otp
  const handleVerifyOtp = async () => {
    if (isOtp ===["", "", "", "", "", ""]) {
      setErrorInvalid(CONSTANTOTP.OTPNOTENTERED);
      setShowError(false);
    }
    else {
      const otp = isOtp?.join("");
      if (otp.length === 6) {
        try {
          const req = { email: employeeId, code: otp };
          const response = await axios.post("http://192.168.135.19:8080/api/confirmSignup", req);
          if (response.data.statusCode === 200) {
            window.location.href = "/storehome";
          }else{
            toast.error("cannot verify OTP!!", {
              className: "toastmessage",
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              theme: "colored",
              background: 'yellow',
              type: "error",
            });
          }
        } catch (error) {
          console.log(error);
        }
        setTimeout(() => {
          const urlLogin="/storemanagerlogin";
          navigate(urlLogin) 
        }, 1500);
      } else if (otp.trim() === '') { setErrorInvalid(CONSTANTOTP.OTPNOTENTERED); }
      else {
        setErrorInvalid(CONSTANTOTP.INVALIDOTP)
        setShowError(false);
      }}}
  //this function is used to resend the otp
  const handleResendOTP = async () => {
    setIsOtp("");
    setErrorInvalid(false);
    try {
      const req = { email: employeeId };
      const response = await axios.post("http://192.168.135.19:8080/api/resendOTP", req);
      if (response.data.statusCode===200) {
        setShowError(true);
      } else {
        toast.error("cannot send OTP!!", {
          className: "toastmessage",
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
          background: 'yellow',
          type: "error",
        });     
      }
    } catch (error) {
      console.log(error);
    }};
return (
    <div className="RegisterPageStore">
      <div className="Rectangle">
        <div className="formgrid invalidmsg">
          <Card>
            <div className="container mgl">
              <Image
                src={require("../../assets/images/ha.png")}
                alt="Image"
                width="100"
                className="imagemargin"/>
              <div className="dividermaindivreg">
                    <div>|</div>
                    <div className="dividertwomarginreg">|</div>
                  </div>
              <div className="gamifications">
                <p1>{CONSTANT.SUSTAINABILITY}</p1>
              </div>
              <div className="gamificationh">
                <p1>{CONSTANT.GAMIFICATION}</p1>
              </div>
            </div>
            <div className="acce">
              <h1>{CONSTANT.ACCELARATE}</h1>
            </div>
            <div className="otph">
              <h2>{CONSTANTOTP.OTPVERIFICATION}</h2>
            </div>
            <div >
              <p1>{CONSTANTOTP.ENTEROTP}: {email}</p1>
            </div>
            <div className="otp-input-c">
              <style>
                {Array.from({ length: 6 }).map(
                  (_, i) =>
                    `.otp-input-c .otp-input-${i} { width: ${64 / 8}% }`
                )}
              </style>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={`otp-input-w input otp-input-${i}`}>
                  <input
                    className="otpinstyle"
                    type="text"
                    maxLength={1}
                    value={isOtp[i] || ""}
                    onChange={(e) => handleOnChange(e, i)}
                    autoFocus={i === 0}
                  />
                </div>
              ))}
            </div>
             <div className="ddrec">
              <p className="mgleftdid">{CONSTANTOTP.DIDNOTRECEIVE}</p>
              <p style={{color:"green"}} className="resotp" onClick={handleResendOTP}>
               {CONSTANTOTP.RESEND}
              </p>
              {showError && <p className="otpsentagain">{CONSTANTOTP.OTPSENTAGAIN}</p>}
            </div>
            <div className="invalidmsg">
              {errorInvalid && (
                <p className="errorStyle marginleftinvalidmsm" >
                 {CONSTANTOTP.INVALIDOTP}
                </p>
              )}
            </div>
            <div className="button">
            <ToastContainer rtl={false} autoClose={false} icon={true}/>
              <button className="btnins" severity="success" onClick={handleVerifyOtp}>{CONSTANT.VERIFY}</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default OtpPage;

