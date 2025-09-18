import React from 'react'; 
import "./FooterContentStyle.css";
import { CONSTANTFOOTERCONTENT } from '../../Constants/Constant';

//provides the footer on the application with images and copyright.
export default function FooterContent() {
    return(
        <>
        {/* <div className="footermaincontainer">
            <div className="etapimg">
                <img src={require('../../assets/images/footer.png')} alt="Image"/>
            </div>
            <div style={{marginLeft:'55vh',display:'flex'}}>
                <div className="copyrightimg">
                    <img src={require('../../assets/images/Copyright.png')} alt="Image"/>
                </div>
                <p className="copyrighttextimg">{CONSTANTFOOTERCONTENT.COPYRIGHT}</p>
            </div>
        </div> */}
        <div style={{fontFamily: "ubutnu",fontSize: "16px", color: 'gray', display:'flex',marginTop:'10px'}}>
          <img  style={{marginLeft:"50%",height:'20px', width:'85px',marginTop:'2px'}}src={require('../../assets/images/footer.png')} alt="Image" />
          <img  style={{marginLeft:"20%",marginTop:'2px',height:'12px', width:'12px'}} src={require('../../assets/images/Copyright.png')} alt="Image" />
          {CONSTANTFOOTERCONTENT.COPYRIGHT}
        </div>
        </>
    )
}