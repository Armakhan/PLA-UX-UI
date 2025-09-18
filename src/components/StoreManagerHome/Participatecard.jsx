import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CURRENTCONTENT,
  CONSTANTCREATENEWCHALLENGE,
} from "../../Constants/Constant";
import "./CardContentStyle.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function ParticipateCard({ participate }) {
  const navigate = useNavigate();
  const handleViewMoreClick = () => {
    navigate("/enrollpage");
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    let daySuffix = (CURRENTCONTENT.TH);
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = (CURRENTCONTENT.ST);
    } else if (day === 2 || day === 22) {
      daySuffix = (CURRENTCONTENT.ND);
    } else if (day === 3 || day === 23) {
      daySuffix = (CURRENTCONTENT.RD);
    }
    return `${day}${daySuffix} ${month}, ${year}`;
  }
  const formattedDate = formatDate(participate.startdate);
  return (
    <div data-testid="participateCard" key={participate.id} className="card bodydesign">
        <div style={{display:"flex",justifyContent:"space-between"}}>
      <p className="challnengenameheading">{participate.challengename}</p>
      <div className="daysleft">
          {participate.enrollstatus === CONSTANTCREATENEWCHALLENGE.ENROLL ? (
            <CountdownCircleTimer
              strokeWidth={3}
              size={38}
              isPlaying
              duration={60 * 60 * 24 * participate.daysleft} // Total duration set to * days in seconds
              initialRemainingTime={60 * 60 * 24 *  participate.daysleft} // Initial remaining time set to * days in seconds
              colors="#54ad64"
              onComplete={() => [true, 1000]}
            >
              {({ remainingTime }) => {
                const days = Math.floor(remainingTime / (60 * 60 * 24));
                return (                 
                    <div className="text">{days}</div>
                );
              }}
            </CountdownCircleTimer>
          ) : null}
        </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
      <div className="startheading">
        {CURRENTCONTENT.STARTEDON} {formattedDate}      
      </div>
      <div className="days">
          {participate.enrollstatus === CONSTANTCREATENEWCHALLENGE.ENROLL
            ? CONSTANTCREATENEWCHALLENGE.DAYS
            : ""}
        </div>
        </div>
      <div className="awardsndtxtcontainer">
        <div className="flexdisplay">
          <div className="cardawardimgstyle">
            <img
              className="awardsimg"
              src={require("../../assets/images/awardsimg.png")}
              alt="awardsimg"
            />
          </div>
          <div>
            <span className="txtsideimg">{participate.winner}</span>
          </div>         
        </div>
        <div className="flexdisplay">
          <button className="enrollbuttonStyle" onClick={handleViewMoreClick}>
            {CURRENTCONTENT.VIEWMORE}
          </button>
          <p className="enrolledmsg">
            {participate.enrollstatus === CONSTANTCREATENEWCHALLENGE.ENROLL
              ? CONSTANTCREATENEWCHALLENGE.ENROLLED
              :""}
          </p>
          <p className="defaultenrolled">{participate.enrollstatus ===(CONSTANTCREATENEWCHALLENGE.DEFAULTENROLLED)? (CONSTANTCREATENEWCHALLENGE.DEFAULTENROLL):""}</p>
        </div>
      </div>
    </div>
  );
}
