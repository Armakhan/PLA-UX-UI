import React, { useState} from "react";
import { Image } from "primereact/image";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.scss";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "../StoreManagerRegistration/StoreManagerReg.css";
import "../../assets/globalCss/global.css";
import { CONSTANT,FORGOTPASSWORD } from "../../Constants/Constant";
import { Password } from "primereact/password";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {FaMapMarkerAlt} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function StoreManagerRegistration () {
  const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [employeeId, setEmployeeId] = useState("");
  const [isValidEmployeeId, setisValidEmployeeId] = useState(true);
  const [dateInput, setDateInput] = useState("");
  const [isValidDate, setIsValidDate] = useState(true);
  const [option, setOption] = useState("");
  const [isCheckOption, setisCheckOption] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [isValidStoreName, setisValidStoreName] = useState(true);
  const [street, setStreet] = useState("");
  const [isValidStreet, setIsValidStreet] = useState(true);
  const [city, setCity] = useState("");
  const [isValidCity, setisValidCity] = useState(true);
  const [country, setCountry] = useState("");
  const [isValidCountry, setisValidCountry] = useState(true);
  const [state, setState] = useState("");
  const [isValidState, setisValidState] = useState(true);
  const [zipCode, setZipCode] = useState("");
  const [isValidZipCode, setisValidZipCode] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassWord, setisValidPassWord] = useState(true);
  const [confirmpassword, setConfirmPassword] = useState("");
  const [isValidConfirmPassword, setisValidConfirmPassword] = useState(true);
  const [errorSkipUser, setErrorSkipUser] = useState(true);
  const [errorSkipEmployeeId, setErrorSkipEmployeeId] = useState(true);
  const [errorSkipEmail, setErrorSkipEmail] = useState(true);
  const [errorSkipDate, setErrorSkipDate] = useState(true);
  const [errorSkipStore, setErrorSkipStore] = useState(true);
  const [errorSkipStreet, setErrorSkipStreet] = useState(true);
  const [errorSkipCity, setErrorSkipCity] = useState(true);
  const [errorSkipCountry, setErrorSkipCountry] = useState(true);
  const [errorSkipState, setErrorSkipState] = useState(true);
  const [errorSkipZipcode, setErrorSkipZipcode] = useState(true);
  const [errorSkipPassword, setErrorSkipPassword] = useState(true);
  const [errorSkipConfirmPassword, setErrorSkipConfirmPassword] =useState(true);
  //this function is used to check user is skipping the username field or not
  const skipChangeValueUser = () => {
    if (!username.trim()) {
      setErrorSkipUser(false);
    } else {setErrorSkipUser(true);
    }};
  //this function is used to check user is skipping the email field or not
  const skipChangeValueEmail = () => {
    if (!email.trim()) {
      setErrorSkipEmail(false);
    } else {setErrorSkipEmail(true);
    }};
  //this function is used to check user is skipping the employeeId field or not
  const skipChangeValueEmpId = () => {
    if (!employeeId.trim()) {
      setErrorSkipEmployeeId(false);
    } else {setErrorSkipEmployeeId(true);
    }};
  //this function is used to check user is skipping the date field or not
  const skipChangeValueDate = () => {
    if (!dateInput.trim()) {
      setErrorSkipDate(false);
    } else{setErrorSkipDate(true);
    }};
  //this function is used to check user is skipping the storeName field or not
  const skipChangeValueStore = () => {
    if (!storeName.trim()) {
      setErrorSkipStore(false);
    } else {setErrorSkipStore(true);
    }};
  //this function is used to check user is skipping the street field or not
  const skipChangeValueStreet = () => {
    if (!street.trim()) {
      setErrorSkipStreet(false);
    } else { setErrorSkipStreet(true);
    }};
  //this function is used to check user is skipping the city field or not
  const skipChangeValueCity = () => {
    if (!city.trim()) {
      setErrorSkipCity(false);
    } else {setErrorSkipCity(true);
    }};
  //this function is used to check user is skipping the country field or not
  const skipChangeValueCountry = () => {
    if (!country.trim()) {
      setErrorSkipCountry(false);
    }else {setErrorSkipCountry(true);
    }};
  //this function is used to check user is skipping the state field or not
  const skipChangeValueState = () => {
    if (!state.trim()) {
      setErrorSkipState(false);
    }else {setErrorSkipState(true);
    }};
  //this function is used to check user is skipping the zipcode field or not
  const skipChangeValueZipcode = () => {
    if (!zipCode.trim()) {
      setErrorSkipZipcode(false);
    }else {setErrorSkipZipcode(true);
    }};
  //this function is used to check user is skipping the password field or not
  const skipChangeValuePassword = () => {
    if (!password.trim()) {
      setErrorSkipPassword(false);
  }else {setErrorSkipPassword(true);
  }};
  //this function is used to check user is skipping the confirmpassword field or not
  const skipChangeValueConfirmPassword = () => {
    if (!confirmpassword.trim()) {
      setErrorSkipConfirmPassword(false);
    }else {setErrorSkipConfirmPassword(true);
    }};
  //this function is used to set the username
  const handleUsernameChange = (e) => {
    const enteredUsername = e.target.value;
    setUsername(e.target.value);
    setErrorSkipUser(true);
    validateUsername(enteredUsername);
  };
  //this function is used to validate the username
  const validateUsername = (value) => {
    const usernameRegex = /^[a-zA-Z]+$/;
    setIsValidUser(usernameRegex.test(value));
  };
  //this function is used to set the email
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setErrorSkipEmail(true);
    validateEmail(enteredEmail);
  };
  //this function is used to validate the email
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setIsValid(emailRegex.test(value));
  };
  //this function is used to set the employee id
  const handleEmployeeIdChange = (e) => {
    const enteredEmployeeId = e.target.value;
    setEmployeeId(enteredEmployeeId);
    setErrorSkipEmployeeId(true);
    validateEmployeeId(enteredEmployeeId);
  };
  //this function is used to validate the employee id
  const validateEmployeeId = (value) => {
    const employeeidRegex = /^\d{6}$/;
    setisValidEmployeeId(employeeidRegex.test(value));
  };
  //this function is used to set the date
  const handleDateInputChange = (e) => {
    const inputValue = e.target.value;
    setDateInput(inputValue);
    setErrorSkipDate(true);
    setIsValidDate(!validateDate(inputValue));
  };
  //this function is used to validate the date
  const validateDate = (dateString) => {
    const dateRegex =
      /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d{2})$/;
    return dateRegex.test(dateString);
  };
  //this function is used to set the option for gender
  const handleoptionchange = (e) => {
    const ischeck = e.target.value;
    setOption(ischeck);
    if (option !== " ") {
      setisCheckOption(true);} 
    else {setisCheckOption(false);
    }};
  //this function is used to set the store name
  const handleStoreNameChange = (e) => {
    const enteredStoreName = e.target.value;
    setStoreName(enteredStoreName);
    setErrorSkipStore(true);
    validateStoreName(enteredStoreName);
  };
  //this function is used to validate the store name
  const validateStoreName = (value) => {
    const storenameRegex = /^[a-zA-Z]+$/;
    setisValidStoreName(storenameRegex.test(value));
  };
  //this function is used to set the street
  const handleStreetChange = (e) => {
    const enteredStreet = e.target.value;
    setStreet(enteredStreet);
    setErrorSkipStreet(true);
    validateStreet(enteredStreet);
  };
  //this function is used to validate the street
  const validateStreet = (value) => {
    const streetRegex = /^[a-zA-Z0-9]+$/;
    setIsValidStreet(streetRegex.test(value));
  };
  //this function is used to set the city
  const handleCityChange = (e) => {
    const enteredCity = e.target.value;
    setCity(enteredCity);
    setErrorSkipCity(true);
    validateCity(enteredCity);
  };
  //this function is used to validate the city
  const validateCity = (value) => {
    const cityRegex = /^[a-zA-Z]+$/;
    setisValidCity(cityRegex.test(value));
  };
  //this function is used to set the country
  const handleCountryChange = (e) => {
    const enteredCountry = e.target.value;
    setCountry(enteredCountry);
    setErrorSkipCountry(true);
    validateCountry(enteredCountry);
  };
  //this function is used to validate the country
  const validateCountry = (value) => {
    const countryRegex = /^[a-zA-Z]+$/;
    setisValidCountry(countryRegex.test(value));
  };
  //this function is used to set the state
  const handleStateChange = (e) => {
    const enteredState = e.target.value;
    setState(enteredState);
    setErrorSkipState(true);
    validateState(enteredState);
  };
  //this function is used to validate the state
  const validateState = (value) => {
    const stateRegex = /^[a-zA-Z]+$/;
    setisValidState(stateRegex.test(value));
  };
  //this function is used to set the zipcode
  const handleZipCodeChange = (e) => {
    const enteredZipCode = e.target.value;
    setZipCode(enteredZipCode);
    setErrorSkipZipcode(true);
    validateZipCode(enteredZipCode);
  };
  //this function is used to validate the zipcode
  const validateZipCode = (value) => {
    const zipCodeRegex = /^\d{6}$/;
    setisValidZipCode(zipCodeRegex.test(value));
  };
  //this function is used to set the password
  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setErrorSkipPassword(true);
    validatePassword(enteredPassword);
  };
  //this function handles the password validation 
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/;
    setisValidPassWord(passwordRegex.test(value));
  };
  //this function handles the matching of password and confirm password for error message
  const handleConfirmPasswordChange = (e) => {
    const enteredConfirmPassword = e.target.value;
    setConfirmPassword(enteredConfirmPassword);
    if (enteredConfirmPassword === password) {
      setisValidConfirmPassword(true);
    } 
    else {setisValidConfirmPassword(false);
           setErrorSkipConfirmPassword(true);
          }};
  //this function handles the enable and disable of Register button
  const validatebutton = () => {
    return (
      username !== "" &&
      isValidUser === true &&
      email !== "" &&
      isValid === true &&
      employeeId !== "" &&
      isValidEmployeeId === true &&
      dateInput !== "" &&
      isValidDate === true &&
      storeName !== "" &&
      isValidStoreName === true &&
      street !== "" &&
      isValidStreet === true &&
      city !== "" &&
      isValidCity === true &&
      country !== "" &&
      isValidCountry === true &&
      state !== "" &&
      isValidState === true &&
      zipCode !== "" &&
      isValidZipCode === true &&
      password !== "" &&
      isValidPassWord === true &&
      isValidDate === true &&
      confirmpassword !== "" &&
      isCheckOption === true &&
      isValidConfirmPassword === true
    ) ? false :true
  }; 
    //this function handles the functionality of Register buttonn
    const handleButtonClick = async () => {
        let gender = null;
        if (option === "option1") {
          gender = "male"
        } else {
          gender = "female"
        }
        const response = await axios.post("http://192.168.29.35:8080/api/signUp", {
          email: email,
          gender: gender,
          password: password,
          phonenumber: "+917483279081",
          roleid: 1,
          storeid:1,
          storename: storeName,
          userid: employeeId,
          username: username,
          DOB: dateInput,
          street: street,
          userdetails: storeName,
          statename: state,
          countryname: country,
          cityname: city,
          zipcode: zipCode
        });
        if (response.data.Status === 200) {
          const url = `/otp/${email}/${employeeId}`;
          navigate(url)
        }else if(response.data.Status === 403){
          toast.error(      
            "User allready exists !!", {
            className: "toastmessagereg",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "colored",
            background: 'yellow',
            type: "error",
          }); 
        }
       
    };
  return (
    <div className="p-grid my-container">
    <div className="RegisterPageStore">
      <div className="Rectangle reactanglepadding">
        <Card className="formgrid grid greenboredr scroll-overflow">
          <div className="formgrid ">
            <div className="container dividermarginleft">
              <Image
                src={require("../../assets/images/ha.png")}
                alt="Image"
                width="100"
                className="imagemarleft"
              />
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
            <div className="AccelerateH">
              <h1>{CONSTANT.ACCELARATE}</h1>
            </div>
            <div className="textareacol">
              <h2 className="storepaddleft">{CONSTANT.STORE}</h2>
              <div className="textarearow">
                <div className="formgrid grid">
                  <div className="field col">
                    <label className="labelmarginbottom" htmlFor="username">{CONSTANT.STORMAN_NAME}</label>
                    <InputText
                      className="textareabox greenboredr"
                      id="username"
                      type="text"
                      onBlur={skipChangeValueUser}
                      value={username}
                      onChange={handleUsernameChange}
                    />
                    {(!isValidUser || !errorSkipUser) && (
                      <p className="errorStyle">
                        {CONSTANT.STOREMAN_NAMEVALID}
                      </p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col ">
                    <label className="labelmarginbottom" htmlFor="employeeId">{CONSTANT.EMPID}</label>
                    <InputText
                      className="textareabox textareabotwo greenboredr"
                      id="employeeId"
                      type="text"
                      onBlur={skipChangeValueEmpId}
                      value={employeeId}
                      onChange={handleEmployeeIdChange}
                    />
                    {!errorSkipEmployeeId && (
                      <p className="errorStyle ">{CONSTANT.EMPID_VALID}</p>
                    )}
                    {!isValidEmployeeId && <p className="errorStyle">{CONSTANT.ENTERSIXDIGIT}</p>}
                  </div>
                  <div />
                </div>
              </div>
              <div className="textarearow">
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="email">{CONSTANT.EMAIL}</label>{" "}
                    <InputText
                      className="textareabox greenboredr"
                      id="email"
                      type="email"
                      onBlur={skipChangeValueEmail}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {(!isValid || !errorSkipEmail) && (
                      <p className="errorStyle">{CONSTANT.EMAIL_VALID}</p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="dateofBirth">{CONSTANT.DATE}</label>
                    <span className="p-input-icon-right ">
                      <InputText
                        className="textareabox textareabotwo greenboredr"
                        id="dateofBirth"
                        type="date"
                        placeholder="dd/mm/yyyy"
                        onBlur={skipChangeValueDate}
                        value={dateInput}
                        onChange={handleDateInputChange}
                      />
                    </span>
                    {(!isValidDate || !errorSkipDate) && (
                      <p className="errorStyle">{CONSTANT.DATE_VALID}</p>
                    )}
                    <div />
                  </div>
                </div>
              </div>
              <div>
              <div style={{display:"flex"}}>
                <h2 className="yourgenpadleft">{CONSTANT.YOURGENDER}</h2>
              </div>
              <div className="usemylocdiv">          
                <button className="usemylocation"><i className="mapicon"><FaMapMarkerAlt/></i>{CONSTANT.USEMYLOCATION}</button> 
              </div>
              </div>
              <div className="youregender">
                <RadioButton
                  value={"option1"}
                  checked={option === "option1"}
                  onChange={handleoptionchange}
                ></RadioButton>
                <label htmlFor="option2">{CONSTANT.MALE}</label>{" "}
                <RadioButton
                  className="radiomarleft "
                  value={"option2"}
                  checked={option === "option2"}
                  onChange={handleoptionchange}
                ></RadioButton>
                <label htmlFor="option2">{CONSTANT.FEMALE}</label>
              </div>
              
              {/* <div className="usemylocdiv">          
                <button className="usemylocation"><i className="mapicon"><FaMapMarkerAlt/></i>{CONSTANT.USEMYLOCATION}</button> 
              </div> */}
              <h2 className="storepaddleft">{CONSTANT.STOREDETAILS}</h2>
              <div className="textarearow">
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="storeName">{CONSTANT.STORE}</label>{" "}
                    <InputText
                      className="textareabox greenboredr"
                      id="storeName"
                      onBlur={skipChangeValueStore}
                      type="text"
                      value={storeName}
                      onChange={handleStoreNameChange}
                    />
                    {(!isValidStoreName || !errorSkipStore) && (
                      <p className="errorStyle">{CONSTANT.STORENAME_VALID}</p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="street">{CONSTANT.STREET}</label>
                    <InputText
                      className="textareabox textareabotwo greenboredr"
                      id="street"
                      onBlur={skipChangeValueStreet}
                      type="text"
                      value={street}
                      onChange={handleStreetChange}
                    />
                    {(!isValidStreet || !errorSkipStreet) && (
                      <p className="errorStyle">{CONSTANT.STREET_VALID}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="textarearow ">
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="city">{CONSTANT.CITY}</label>
                    <InputText
                      className="textareabox cityinput greenboredr"
                      id="city"
                      type="dropdown"
                      onBlur={skipChangeValueCity}
                      value={city}
                      onChange={handleCityChange}
                    />
                    {(!isValidCity || !errorSkipCity) && (
                      <p className="errorStyle">{CONSTANT.CITY_VALID}</p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col margleftp">
                    <label htmlFor="country">{CONSTANT.COUNTRY}</label>
                    <InputText
                      className="textareabox textareabotwo cityinput greenboredr"
                      id="country"
                      type="text"
                      onBlur={skipChangeValueCountry}
                      value={country}
                      onChange={handleCountryChange}
                    />
                    {(!isValidCountry || !errorSkipCountry) && (
                      <p className="errorStyle">{CONSTANT.COUNTRY_VALID}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="textarearow">
                <div class="formgrid grid">
                  <div class="field col">
                    <label htmlFor="state">{CONSTANT.STATE}</label>{" "}
                    <InputText
                      className="textareabox cityinput greenboredr"
                      id="state"
                      type="text"
                      onBlur={skipChangeValueState}
                      value={state}
                      onChange={handleStateChange}
                    />
                    {(!isValidState || !errorSkipState) && (
                      <p className="errorStyle">{CONSTANT.STATE_VALID}</p>
                    )}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col margleftp">
                    <label htmlFor="zipCode">{CONSTANT.ZIP}</label>
                    <InputText
                      className="textareabox textareabotwo greenboredr "
                      id="zipCode"
                      onBlur={skipChangeValueZipcode}
                      type="text"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                    />
                    {(!isValidZipCode || !errorSkipZipcode) && (
                      <p className="errorStyle">{CONSTANT.ZIP_VALID}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="textarearow">
                <div class="formgrid grid">
                  <div class="field col marginleftpassword ">
                    <label className="marginleft-passwordlable" htmlFor="password">{CONSTANT.PASSWORD}</label>
                    <Password
                      className="textareabox"
                      id="password"
                      onBlur={skipChangeValuePassword}
                      type="password"
                      value={password}
                      feedback={false}
                      toggleMask
                      onChange={handlePasswordChange}
                    />
                    {!errorSkipPassword && (
                      <p className="errorStyle marginleft-passwordlable">{CONSTANT.PASSWORD_VALID}</p>
                    )}
                    {!isValidPassWord && errorSkipPassword && (<><p className="errorStyle marginleft-passwordlable errormsgfontsize">{CONSTANT.ERRORSHOULDCONTAIN} </p> <p className="errorStyle marginleft-passwordlable errormsgfontsize errortextshouldcontainmsg">{CONSTANT.ERRORSHOULDCONTAINTWO}</p></>)}
                  </div>
                </div>
                <div class="formgrid grid">
                  <div class="field col">
                    <label className="marginleft-passwordlable"htmlFor="confirmpassword ">
                      {CONSTANT.CONFIRM_PASSWORD}
                    </label>
                    <div>
                      <Password
                        className="textareabox textareabotwo"
                        id="confirmpassword"
                        onBlur={skipChangeValueConfirmPassword}
                        type="password"
                        value={confirmpassword}
                        onChange={handleConfirmPasswordChange}
                        disabled={password === "" ? true : false}
                        toggleMask={true}
                        feedback={false}
                      />
                    </div>
                    {(!errorSkipConfirmPassword) && (
                      <p className="errorStyle marginleft-passwordlable">
                        {CONSTANT.CONFIRM_PASSWORD_VALID}
                      </p>
                    )}
                    {!isValidConfirmPassword && errorSkipConfirmPassword && <p className="errorStyle marginleft-passwordlable">{FORGOTPASSWORD.PASSWORDDIDNOTMAT}</p>}
                  </div>
                </div>
              </div>
              <div class="formgrid grid">
                <div class="field col">
                  <div className="btnreg">
                    <button
                      className="buttonstyle"
                      severity="success"
                      type="submit"
                      onClick={handleButtonClick}
                      disabled={validatebutton()}
                      style={{ backgroundColor: validatebutton() ? '#c3e0cfff' : '#009b45'  }}
                    >
                      {CONSTANT.REGISTER}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <ToastContainer className="toastcontainer" rtl={false} autoClose={false} />
      </div>
    </div>
    </div>
  );
}
export default StoreManagerRegistration;




