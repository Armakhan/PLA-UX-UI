import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderNav from "../HeaderComponent/HeaderPage";
import "./EnrollPageStyle.css";
import 'react-tabs/style/react-tabs.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import MainContent from "./MainContent";
import {CONSTANTFORMCONTAINER} from "../../Constants/Constant";
import FooterContent from "../StoreManagerHome/FooterContent";

function EnrollPage() {
    const navigate = useNavigate();
    const handlebackbutton = () => {navigate('/storehome');}
    return (
    <div>
        <HeaderNav/>
        <div className="displayflex">
        <button className="backbutton" onClick={handlebackbutton}><AiOutlineArrowLeft />{CONSTANTFORMCONTAINER.BACK}</button>
        <p className="headerclass">Packaging Peril Challenge</p>
        </div>
        <div className='maincontent'>
            <MainContent/>
        </div>
        <div>
            <FooterContent/>
        </div>
    </div>
  )
}
export default EnrollPage;