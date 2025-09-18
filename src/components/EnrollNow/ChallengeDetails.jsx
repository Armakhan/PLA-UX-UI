import React from "react";
import "react-tabs/style/react-tabs.css";
import "./MainContentStyle.css";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import "./ChallengeDetailsStyle.css";
import { IconContext } from 'react-icons';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {CONSTANTVIEWMOEWCHALLENGEDETAILS} from "../../Constants/Constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function ChallengeDetails() {
    const isVisible=false;
    const navigate =useNavigate();
    const onclickoEnrollnow=()=>{      
                  
         
         toast.success(      
            "Success - Packaging Peril Challenge is enrolled successfully.", {
            className: "toastmessage",
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: true,
            theme: "colored",
            background: 'yellow',
            type: "success",
            icon: <img className="toasticon" src={require('../../assets/images/Checkcircle.png')} alt="pic" />
          });
        
        setTimeout(() => {
        navigate("/storehome");
        },2000 );
        }
    return (
        <>
            <div className="entirestyle">
                <div style={{display:'flex'}}>
                    <h1 className="detailsheading">Packaging Peril Challenge</h1>
                    {isVisible?(<>
                        <div style={{display:'flex'}}>
                    <button className="editbuttonstyle">
                        <IconContext.Provider value={{ size: '1.5em' }}>
                            <MdOutlineModeEditOutline />
                            </IconContext.Provider>
                    </button>
                    <button className="dltbuttonstyle">
                        <IconContext.Provider value={{ size: '1.5em' }}>
                            <RiDeleteBin6Line />
                        </IconContext.Provider>
                    </button>
                    </div>
                    </>):("")}
                </div>
                <div className="entirecontainer">
                    <div className="durationstartcontainers">
                        <div className="startdate">
                            {CONSTANTVIEWMOEWCHALLENGEDETAILS.STARTEDDATE}
                        </div>
                        <div className="duration">
                            {CONSTANTVIEWMOEWCHALLENGEDETAILS.DURATION}
                        </div>
                        <div className="Winnerannouncement">
                            Winner Announcement Date (1st April 2023)
                        </div>
                    </div>
                    <div className="text-justify divkpidesc">
                        <span>
                            <span className="boldletter">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.DESCRIPTION}
                            </span>
                            <span className="contentclss">
                                {" "}
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.PACKAGING}
                            </span>
                        </span>
                        <br />
                        <br />
                        <span>
                            <span className="boldletterall">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.EVALUATIONKPI}
                            </span>
                            <span className="contentclss">
                                {" "}
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.AMOUNT}
                            </span>
                        </span>
                        <br />
                        <br />
                        <span>
                            <span className="boldletterall">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.ELIGIBILITY}
                            </span>
                            <span className="contentclss">
                                {" "}
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.AMOUNT}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span className="boldletterall">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.ENTERMADEBY}
                            </span>
                            <span className="contentclss">
                                {" "}
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.AMOUNT}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span className="boldletterall">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.DATAREQ}
                            </span>
                            <span className="contentclss">
                                {" "}
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.AMOUNT}
                            </span>
                        </span>
                        <br />
                        <br />
                        <br />
                        <span>
                            <img
                                className="imageclass"
                                src={require("../../assets/images/awardsimg.png")}
                                alt=""
                            />
                            <span className="boldletterall">
                                {CONSTANTVIEWMOEWCHALLENGEDETAILS.AWARDS}
                            </span>
                        </span>
                        <br />
                        <span className="contentclss">
                            {" "}
                            {CONSTANTVIEWMOEWCHALLENGEDETAILS.WINNERSTORE}
                        </span>
                        <br />
                        <span className="contentclss">
                            {CONSTANTVIEWMOEWCHALLENGEDETAILS.ONESTRUNNERUP}
                        </span>
                        <br />
                        <span className="contentclss">
                            {CONSTANTVIEWMOEWCHALLENGEDETAILS.TWONDRUNNERUP}
                        </span>
                    </div>
                    <button className="styleenrollbutton" onClick={onclickoEnrollnow}>Enroll Now</button>
                </div>
                <ToastContainer rtl={false} autoClose={false} icon={true}/>
            </div>
        </>
    )
}
export default ChallengeDetails;