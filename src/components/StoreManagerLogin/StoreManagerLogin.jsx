import React, {useState } from "react";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import "../../assets/globalCss/global.css";
import "../../components/StoreManagerLogin/StoreMnagerLogin.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import { InputText } from "primereact/inputtext";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.scss";
import { Checkbox } from "primereact/checkbox";
import { Password } from "primereact/password";
import axios from "axios";
import { CONSTANT, CONSTANTLOGIN } from "../../Constants/Constant";
import { useNavigate } from "react-router-dom";
const StoreManagerLogin = () => {
  const navigate =useNavigate();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState("");
  const [isValidUserl, setIsValidUserl] = useState(true);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(true);
  const [errorUpper, setErrorUpper] = useState(true);
  const [errorSkipUserLog, setErrorSkipUserLog] = useState(true);
  const [errorSkipPassWordLog, setErrorSkipPassWordLog] = useState(true);
  //this function is used to check wheather user is skipping user field or not
  const skipChangeValueUser = () => {
    if (!user.trim()) {
      setErrorSkipUserLog(false);
    } else {setErrorSkipUserLog(true);
    }};
  //this function is used to check wheather user is skipping password field or not
  const skipChangeValuePassWord = () => {
    if (!password.trim()) {
      setErrorSkipPassWordLog(false);
    } else {setErrorSkipPassWordLog(true);
    }};
  // this function is used to set the value from user
  const handleUsernameChangel = (e) => {
    const enteredUsername = e.target.value;
    setUser(e.target.value);
    setErrorSkipUserLog(true);
    setErrorMessage(true);
    validateUsername(enteredUsername);
    setErrorUpper(true);
  };
  //this function is used to validate the user
  const validateUsername = (username) => {
    const usernameRegex = /^\d{6}$/;
    setIsValidUserl(usernameRegex.test(username));
  };
  //this function is used to set the value from password and checks wheather it is correct or not
  const handleConfirmPasswordChangel = (e) => {
    const enteredConfirmPassword = e.target.value;
    setPassword(enteredConfirmPassword);
    setErrorSkipPassWordLog(true);
  };
  //this function is used to handle the checkbox for remember me
 const handleRememberMe = () => {
  if (checked === false) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }}
  //this function is used to handle the button click
  const handleButtonClick = async() => {   
      const data={ 
       password:password,
       userid:user}
      const response = await axios.post("http://192.168.29.35:8080/api/signIn",data);
      if (response.status === 200) {
        navigate("/storehome");
      }};
  //this function is used to enable the button
      const handleEnable = () => {
      return ( user !== "" && password !=="") ?  true :  false;
    }
  return (
    <div className="RegisterPageStore">
      <div className="Rectangle">
        <div className="formgrid entireleftmargin">
          <div className="formgrid textarearowlog">
            <div className="picture">
              <Image
                src={require("../../assets/images/login.png")}
                height="457"
                width="516"
                alt="Image"/>
            </div>
            <div className="picture">
              <Card className="cardwidth">
                <div className="containerlog">
                  <Image
                    src={require("../../assets/images/ha.png")}
                    alt="Image"
                    width="100"
                    className="imagemleft"/>
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
                <div className="accelog">
                  <h1>{CONSTANTLOGIN.ACCELARATEHALF} </h1>
                </div>
                <div className="sustainlog">
                  <h1>{CONSTANTLOGIN.SUSTAINABILITYHALF}</h1>
                </div>
                {!errorUpper && (<p className="errorpendingmessage">{CONSTANTLOGIN.PENDINGAPPOVAL}</p> )}
                <div class="formgrid grid">
                  <div class="field col">
                    <InputText
                      className="textareaboxlog p-inputtextlog greenboredruser"
                      id="username"
                      type="text"
                      onBlur={skipChangeValueUser}
                      placeholder="Enter Six digit Employee ID"
                      value={user}
                      onChange={handleUsernameChangel}/>
                    {(!isValidUserl || !errorSkipUserLog) && (
                      <p className="errorStyle errorstyleuser">
                        {CONSTANTLOGIN.USERNAME_VALID}
                      </p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col">
                    <div className="passwordboxMT">
                      <Password
                        // className="p-valid"
                        onBlur={skipChangeValuePassWord}
                        placeholder="Enter Password"
                        value={password}
                        onChange={handleConfirmPasswordChangel}
                        feedback={false}
                        toggleMask/>
                       {(!errorSkipPassWordLog) && (
                      <p className="errorStyle errorstylepass">
                        {CONSTANTLOGIN.PASSWORD_VALID}
                      </p>)}
                    </div>
                  </div>
                </div>
                <div className="displaylogin">
                  <div>
                  <Checkbox
                        className="checkbox"
                        onChange={(e) => {
                          setChecked(e.checked);
                          handleRememberMe();
                        }}
                        checked={checked}/>
                    <label className="rememberme">
                      {CONSTANTLOGIN.REMEMBERME}
                    </label>
                  </div>
                  <div className="">
                    <a className="anchorcolor"
                      href="/forgotpassword"
                    >{CONSTANTLOGIN.FORGOTPASSWORD}
                    </a>
                  </div>
                </div>
                {!errorMessage && (<p className="errorStyle marginforinvalidinputs">
                      {CONSTANTLOGIN.ENTERUSERPASSWORD}</p>)} 
                <div className="btndiv">
                  <button onClick={handleButtonClick } data-testid='login-btn' disabled={!handleEnable()} style={{ backgroundColor: (!handleEnable() ? '#b5f5d1' : '#009b45') }} severity="success" className="buttonlogin">
                    {CONSTANTLOGIN.LOGININTOYOURACC}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreManagerLogin;
