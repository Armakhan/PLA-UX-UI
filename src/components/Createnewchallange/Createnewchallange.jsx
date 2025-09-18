import React, { useState } from "react";
import "../Createnewchallange/Createnewchallangestyle.css";
import { InputText } from "primereact/inputtext";
import 'primereact/resources/themes/lara-light-teal/theme.css';
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONSTANTCREATENEWCHALLENGE, CONSTANTVIEWMOEWCHALLENGEDETAILS } from "../../Constants/Constant";
import { Dialog } from 'primereact/dialog';

function Createnewchallange() {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [kpi, setKpi] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [reqdata, setReqdata] = useState("");
  const [winner, setWinner] = useState("");
  const [firstRunner, setFirstrunner] = useState("");
  const [secondRunner, setSecondRunner] = useState("");
  const [winnerAnnouncementDate, setWinnerAnnouncementDate] = useState(null);
  const [winnerReqError, setWinnerReqError] = useState(false);
  const [winnerDateError, setWinnerDateError] = useState(false);
  const [requiredWinnerAnnouncementDateError, setRequiredWinnerAnnouncementDateError] = useState(false);
  const [firstRunnerReqdError, setFirstRunnerReqdError] = useState(false);
  const [secondRunnerReqdError, setSecondRunnerReqdError] = useState(false);
  const [reqDataReqError, setReqDataReqError] = useState(false);
  const [fnameReqError, setFnameReqError] = useState(false);
  const [descReqError, setDescReqError] = useState(false);
  const [kpiReqError, setKpiReqError] = useState(false);
  const [eligibilityReqError, setEligibilityRreqError] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reqdEndDateError, setReqdEndDateError] = useState(false);
  const [reqdStartDateerror, setReqdStartDateerror] = useState(false);
  const [endDatevalidError, setEndDatevalidError] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkStartDate = (e) => {
    if (e.target.value > endDate) { setEndDatevalidError(true); }
    else { setEndDatevalidError(false); }
  }
  const checkEndDate = (e) => {
    if (e.target.value < startDate) { setEndDatevalidError(true); }
    else { setEndDatevalidError(false); }
  }
  //or
  const checkWinnerDate = (e) => {
    if (e.target.value < startDate) { setWinnerDateError(true); }
    else if(e.target.value < endDate) { setWinnerDateError(true); }
    else { setWinnerDateError(false); }
  }
  const requiredWinner = (e) => {
    if (e.target.value === '') { setWinnerReqError(true); }
    else { setWinnerReqError(false); }
  };
  const requiredFirstrunner = (e) => {
    if (e.target.value === '') { setFirstRunnerReqdError(true); }
    else { setFirstRunnerReqdError(false); }
  };
  const requiredSecondRunner = (e) => {
    if (e.target.value === '') { setSecondRunnerReqdError(true); }
    else { setSecondRunnerReqdError(false); }
  };
  const requiredReqdata = (e) => {
    if (e.target.value === '') { setReqDataReqError(true); }
    else { setReqDataReqError(false); }
  };
  const requiredEligibility = (e) => {
    if (e.target.value === '') { setEligibilityRreqError(true); }
    else { setEligibilityRreqError(false); }
  };
  const requiredDesc = (e) => {
    if (e.target.value === '') { setDescReqError(true); }
    else { setDescReqError(false); }
  };
  const requiredKpi = (e) => {
    if (e.target.value === '') { setKpiReqError(true); }
    else { setKpiReqError(false); }
  };
  const requiredName = (e) => {
    if (e.target.value === '') { setFnameReqError(true); }
    else { setFnameReqError(false); }
  };
  const reqdEndDate = (e) => {
    if (e.target.value === '') { setReqdEndDateError(true); }
    else { setReqdEndDateError(false); }
  }
  const reqdStartDate = (e) => {
    if (e.target.value === '') { setReqdStartDateerror(true); }
    else { setReqdStartDateerror(false); }
  }
  const reqdWinnerDate = (e) => {
    if (e.target.value === '') { setRequiredWinnerAnnouncementDateError(true); }
    else { setRequiredWinnerAnnouncementDateError(false); }
  }
  const makeClear = () => {
    setReqDataReqError(false);
    setFnameReqError(false);
    setDescReqError(false);
    setKpiReqError(false);
    setEligibilityRreqError(false);
    setRequiredWinnerAnnouncementDateError(false);
    setFirstRunnerReqdError(false);
    setSecondRunnerReqdError(false);
    setReqdEndDateError(false);
    setReqdStartDateerror(false);
    setEndDatevalidError(false);
    setName('');
    setDesc('');
    setKpi('');
    setFirstrunner('');
    setSecondRunner('');
    setWinner('');
    setEligibility('');
    setWinnerAnnouncementDate(null);
    setReqdata('');
    setStartDate('');
    setEndDate('');
  }
  const submitchallengeDetails = (event) => {
    if (firstRunnerReqdError || secondRunnerReqdError || winnerReqError || requiredWinnerAnnouncementDateError || reqDataReqError || fnameReqError || descReqError || kpiReqError || eligibilityReqError || reqdEndDateError || reqdStartDateerror) {
      event.preventDefault();

    }
    else {
      makeClear();
      toast.success("Success - Sustainability Challenge is published successfully.", {
        className: "toastmessage",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
        background: 'yellow',
        icon: <img className="toasticon" src={require('../../assets/images/Checkcircle.png')} alt="pic" />
      });
    }
  };
  const savedraft = () => {
    setVisible(false);
    toast.success("Success - Sustainability Challenge is saved successfully.", {
      className: "toastmessage",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
      background: 'yellow',
      icon: <img className="toasticon" src={require('../../assets/images/Checkcircle.png')} alt="pic" />
    });
  }
  function submitBtnDisable() {
    return (winner !== '' && firstRunner !== '' && secondRunner !== '' && firstRunnerReqdError === false && secondRunnerReqdError === false && requiredWinnerAnnouncementDateError === false && winnerAnnouncementDate !== null && name !== '' && startDate !== '' && endDate !== '' && desc !== '' && kpi !== '' && eligibility !== '' && reqdata !== '' && startDate !== null && endDate !== null
      && winnerReqError === false && reqdEndDateError === false && reqdStartDateerror === false && endDatevalidError === false && reqDataReqError === false && fnameReqError === false && descReqError === false && kpiReqError === false
      && eligibilityReqError === false) ? false : true;
  }
  return (
    <div>
      <div className="card flex justify-content-center">
        <button className="newchallangebtn" onClick={() => setVisible(true)}><img className="newchallengeimgstyle" src={require('../../assets/images/Insert_Page.png')} alt="Image" />{CONSTANTCREATENEWCHALLENGE.CREATECHALLENGE}</button>
        <Dialog header="Create New  Challenge" visible={visible} className="dialogstyle" onHide={() => setVisible(false)} >
          <div>
            <div className='formgeneralstyle'>
              <div class="field">
                <label className='labelStyleone'>{CONSTANTCREATENEWCHALLENGE.ENTERCHALLENGENAME}</label>
                <InputText
                  value={name}
                  className="p-inputtext-sm textfieldstylegreen"
                  onChange={(e) => { setName(e.target.value); }}
                  onBlur={(e) => { requiredName(e); }}
                  data-testid = 'challengename'
                />
                {fnameReqError ? (
                  <span className="commonerrrstyle">
                    {CONSTANTCREATENEWCHALLENGE.PLEASEENTERCHALLENGENAME}
                  </span>
                ) : ("")}
              </div>
              <div class="field">
                <label className='labelStyle' htmlFor="username">{CONSTANTVIEWMOEWCHALLENGEDETAILS.DESCRIPTION}</label>
                <InputText
                  value={desc}
                  className="p-inputtext-sm textfieldstyle"
                  onChange={(e) => { setDesc(e.target.value); }}
                  onBlur={(e) => { requiredDesc(e); }}
                />
                {descReqError ? (
                  <span className="commonerrrstyle">
                    {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHEDESCRIPTION}
                  </span>
                ) : ("")}
              </div>
              <div class="field">
                <label className='labelStyle' htmlFor="username">{CONSTANTVIEWMOEWCHALLENGEDETAILS.EVALUATIONKPI}</label>
                <InputText
                  value={kpi}
                  className="p-inputtext-sm textfieldstyle"
                  onChange={(e) => { setKpi(e.target.value); }}
                  onBlur={(e) => { requiredKpi(e); }}
                />
                {kpiReqError ? (
                  <span className="commonerrrstyle">
                    {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHEEVALUATIONKPI}
                  </span>
                ) : ("")}
              </div>
              <div class="field">
                <label className='labelStyle' htmlFor="eligibility">{CONSTANTVIEWMOEWCHALLENGEDETAILS.ELIGIBILITY}</label>
                <InputText
                  value={eligibility}
                  className="p-inputtext-sm textfieldstyle"
                  onChange={(e) => { setEligibility(e.target.value); }}
                  onBlur={(e) => { requiredEligibility(e); }}
                />
                {eligibilityReqError ? (
                  <span className="commonerrrstyle">
                    {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHEELIBILTY}
                  </span>
                ) : ("")}
              </div>
              <div class="field">
                <label className='labelStyle' htmlFor="eligibility">{CONSTANTVIEWMOEWCHALLENGEDETAILS.DATAREQ}</label>
                <InputText
                  value={reqdata}
                  className="p-inputtext-sm textfieldstyle"
                  onChange={(e) => { setReqdata(e.target.value); }}
                  onBlur={(e) => { requiredReqdata(e); }}
                />
                {reqDataReqError ? (
                  <span className="commonerrrstyle">
                    {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHEDATA}
                  </span>
                ) : ("")}
              </div>
              <div class="field">
                <label className='labelStyle' htmlFor="eligibility">{CONSTANTVIEWMOEWCHALLENGEDETAILS.ENTERMADEBY}</label>
                <InputText
                  value= "Store Manager"
                  className="p-inputtext-sm textfieldstyleenrtrymadeby"
                  disabled={true}
                />
              </div>
              <label className='labelStyle' htmlFor="eligibility">{CONSTANTVIEWMOEWCHALLENGEDETAILS.AWARDS}</label>
              <div class="field labelalignmentwithfield">
                <label className='labelStyleawards' htmlFor="eligibility">{CONSTANTCREATENEWCHALLENGE.WINNER}</label>
                <InputText
                  value={winner}
                  className="p-inputtext-sm smalltextfieldwinner"
                  onChange={(e) => {
                    requiredWinner(e);
                    setWinner(e.target.value);
                  }}
                  onBlur={(e) => { requiredWinner(e); }}
                />
                <br />
                {winnerReqError ? (
                  <div className="awarderrormsg">
                    {CONSTANTCREATENEWCHALLENGE.THISFIELDISREQUIRED}
                  </div>
                ) : ("")}
              </div>
              <div class="field labelalignmentwithfieldtwo">
                <label className='labelStyleawards' htmlFor="eligibility">{CONSTANTCREATENEWCHALLENGE.FIRSTRUNNERUP}</label>
                <InputText
                  value={firstRunner}
                  className="p-inputtext-sm smalltextfield"
                  onChange={(e) => {
                    requiredFirstrunner(e);
                    setFirstrunner(e.target.value);
                  }}
                  onBlur={(e) => { requiredFirstrunner(e); }}
                />
                {firstRunnerReqdError ? (
                  <div className="awarderrormsg">
                    {CONSTANTCREATENEWCHALLENGE.THISFIELDISREQUIRED}
                  </div>
                ) : ("")}
              </div>
              <div class="field labelalignmentwithfieldtwo">
                <label className='labelStyleawards' htmlFor="eligibility">{CONSTANTCREATENEWCHALLENGE.SECONDRUNNERUP}</label>
                <InputText
                  value={secondRunner}
                  className="p-inputtext-sm smalltextfieldsecndrunner"
                  onChange={(e) => {
                    setSecondRunner(e.target.value);
                    requiredSecondRunner(e);
                  }}
                  onBlur={(e) => { requiredSecondRunner(e); }}
                />
                {secondRunnerReqdError ? (<div className="awarderrormsg">
                  {CONSTANTCREATENEWCHALLENGE.THISFIELDISREQUIRED}
                </div>
                ) : ("")}
              </div>
              <div className="calendercontainer">
                <div>
                  <label className='labelStyle' htmlFor="startdate" >{CONSTANTCREATENEWCHALLENGE.STARTDATE}</label>
                  <InputText
                    className="smalltextfielddate"
                    id="startdate"
                    type="date"
                    value={startDate}
                    onBlur={(e) => { reqdStartDate(e); }}
                    onChange={(e) => {
                      reqdStartDate(e);
                      setStartDate(e.target.value);
                      checkStartDate(e)
                    }}
                  />
                  <br />
                  {reqdStartDateerror ? (
                    <div className="dateerrorstyle">
                      {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHESTARTDATE}
                    </div>
                  ) : ("")}
                  <br />
                </div>
                <div>
                  <label className='labelStyle' htmlFor="enddate">{CONSTANTCREATENEWCHALLENGE.ENDDATE}</label>
                  <InputText
                    className="smalltextfielddate"
                    id="endDate"
                    type="date"
                    value={endDate}
                    onBlur={(e) => { reqdEndDate(e); }}
                    onChange={(e) => {
                      reqdEndDate(e);
                      setEndDate(e.target.value);
                      checkEndDate(e)
                    }}
                  />
                  <br />
                  {reqdEndDateError ? (
                    <p className="dateerrorstyle">
                      {CONSTANTCREATENEWCHALLENGE.PLEASEENTERTHEENDDATE}
                    </p>
                  ) : ("")}
                  {endDatevalidError ? (<p className="dateerrorstyle">
                    {CONSTANTCREATENEWCHALLENGE.ENDDATENOTVALID}
                  </p>
                  ) : ("")}
                </div>
              </div>
              <div class="field labelalignmentwithfieldthree">
                <label className='labelStylewinner' htmlFor="eligibility">{CONSTANTCREATENEWCHALLENGE.WINNERANNOUNCEDATE}</label>
                <InputText
                  className="smalltextfieldwinnerdate"
                  id="endDate"
                  type="date"
                  value={winnerAnnouncementDate}
                  onBlur={(e) => { reqdWinnerDate(e); }}
                  onChange={(e) => {
                    reqdWinnerDate(e);
                    checkWinnerDate(e);
                    setWinnerAnnouncementDate(e.target.value);
                  }}
                />
                {requiredWinnerAnnouncementDateError ? (
                  <p className="winnerdatevaliderror">
                    {CONSTANTCREATENEWCHALLENGE.THISFIELDISREQUIRED}
                  </p>
                ) : ("")}
                <br/>
                {winnerDateError ? (
                  <p className="winnerdatevaliderror">
                    {CONSTANTCREATENEWCHALLENGE.WINNERDATEERROR}
                  </p>
                ) : ("")}
              </div>
              <div className="btncontainer" data-testid = 'entirebtn'>
                <button className='btnclssone' data-testid = 'savedrafttest' onClick={savedraft}>{CONSTANTCREATENEWCHALLENGE.SAVEDRAFT}</button>
                <button className='btnclsstwo'  data-testid = 'savepublishedtest' style={{ backgroundColor: (submitBtnDisable() ? '#7bb796' : '#009b45') }} onClick={(e) => {
                  setVisible(false);
                  submitchallengeDetails(e)
                }} disabled={submitBtnDisable()} autoFocus>{CONSTANTCREATENEWCHALLENGE.PUBLISH}</button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <ToastContainer style={{marginTop:'35px'}} rtl={false} autoClose={false} />
    </div>
  );
}

export default Createnewchallange;