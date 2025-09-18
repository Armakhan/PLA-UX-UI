import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENTCONTENT,CONSTANTCREATENEWCHALLENGE } from '../../Constants/Constant';
import "./CardContentStyle.css";
export default function MyChallengeCard({ mychallenge }) {
    const navigate = useNavigate();
    const handleViewDetailsClick = () => {
        navigate('/enrollpage');
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        const year = date.getFullYear();
        let daySuffix =(CURRENTCONTENT.TH);
        if (day === 1 || day === 21 || day === 31) {
          daySuffix = (CURRENTCONTENT.ST);
        } else if (day === 2 || day === 22) {
          daySuffix = (CURRENTCONTENT.ND);
        } else if (day === 3 || day === 23) {
          daySuffix = (CURRENTCONTENT.RD);
        }
        return `${day}${daySuffix} ${month}, ${year}`;
      }
      const formattedDate = formatDate(mychallenge.startdate);
    return (
        <div data-testid="myChallengeCard" key={mychallenge.id} className="card bodydesign">
            <p className="challnengenameheading">{mychallenge.challengename}</p>
            <div className="startheading">
                {CURRENTCONTENT.STARTEDON} {formattedDate}
            </div>
            <div className="awardsndtxtcontainer">
                <div className="flexdisplay">
                    <div className="cardawardimgstyle">
                        <img className="awardsimg" src={require('../../assets/images/awardsimg.png')} alt="Image" />
                    </div>
                    <div>
                        <span className="txtsideimg">{mychallenge.winner}</span>
                    </div>
                </div>
                <div className="flexdisplay">
                <button className="enrollbuttonStyle" onClick={handleViewDetailsClick}>{CURRENTCONTENT.VIEWDETAILS}</button>
                <p className={(mychallenge.status ===(CONSTANTCREATENEWCHALLENGE.PUBLISHED)) ?"enrolledmsg":"saveasdraft"} style={{ color: mychallenge.status === (CONSTANTCREATENEWCHALLENGE.PUBLISHED) ? "#48c655" : "#e53838" }}>
                    {(mychallenge.status===(CONSTANTCREATENEWCHALLENGE.DRAFT)) ? (CONSTANTCREATENEWCHALLENGE.SAVEDRAFT):(CONSTANTCREATENEWCHALLENGE.PUBLISH)}</p>
                </div>
            </div>
        </div>
    )
}