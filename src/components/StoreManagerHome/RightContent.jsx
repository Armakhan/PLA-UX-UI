import React from "react";
import "./RightContentStyle.css";
import {CONSTANTRIGHTCONTENT} from "../../Constants/Constant";

const RightContent = () => {
  return (
    <div className='maincontainer'>
      <h1 className="rightcontentheading">{CONSTANTRIGHTCONTENT.HEADING}</h1>
     <img className="runimgclss" src={require('../../assets/images/raceimg.png')} alt="Image" />
    </div>
  );
};

export default RightContent;