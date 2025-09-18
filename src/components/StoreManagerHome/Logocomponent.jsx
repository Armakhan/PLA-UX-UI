import React from 'react';
import './Logocomponent.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { CONSTANT} from "../../Constants/Constant";

function LogoComponent() {
  return (
    <div className="logomaindiv">
        <div className="imgdiv"> 
            <img className="cpgeminiclss" src={require('../../assets/images/ha.png')} alt="Image" />
        </div>
        <div className="verticaldivider"/>
        <p className="dividerclss">|</p>
        <div className="paralogodiv">
          <div className="sustainclsspara">
            <p>{CONSTANT.SUSTAINABILITY}</p>
          </div>
          <div className="gameparaclss">
            <p1>{CONSTANT.GAMIFICATION}</p1>
          </div>
        </div>
    </div>
  );
}

export default LogoComponent;
