import React from "react";
import "./ProfileStyle.css";
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Divider } from "@react-md/divider";
import { CONSTANTFORMCONTAINER, CONSTANTPROFILE, CONSTANTFOOTERCONTENT } from "../../Constants/Constant";
import HeaderPage from "../HeaderComponent/HeaderPage";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

const Profile = () => {
  const navigate = useNavigate();
  const handlebackbutton = () => { navigate('/storehome'); }
  return (
    <>
      <HeaderPage />
      <div className="profilepagecontainer">
        <div className="toppestrow">
          <button className="profilebackbutton" onClick={handlebackbutton}><AiOutlineArrowLeft />{CONSTANTFORMCONTAINER.BACK}</button>
          <p className="profilepgheading">{CONSTANTPROFILE.PROFILEPAGE}</p>
          <span className="dashbordbtncontain">
            <button className="dashboardbtn">{CONSTANTPROFILE.DASHBOARD}</button>
          </span>
        </div>
        <div className="displayflex">
          <ProfileLeft />
          <Divider />
          <ProfileRight />
        </div>
      </div>
        <div style={{fontFamily: "ubutnu",fontSize: "16px", color: 'gray', display:'flex'}}>
          <img  style={{marginLeft:"46%",height:'20px', width:'85px'}}src={require('../../assets/images/footer.png')} alt="Image" />
          <img  style={{marginLeft:"26%",marginTop:'2px',height:'12px', width:'12px'}} src={require('../../assets/images/Copyright.png')} alt="Image" />
          {CONSTANTFOOTERCONTENT.COPYRIGHT}
        </div>
    </>
  );
};

export default Profile;