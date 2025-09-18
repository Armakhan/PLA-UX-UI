//divide the entire screen into 3 parts with the help of react prime grid system.
import React from 'react';
import './MyProgressTabPanelStyle.css';
import { ProgressBar } from 'primereact/progressbar';
import FormContainer from './FormContainer.jsx';
import LineChart from '../LineChart/LineChart';
import { CONSTANTFORMCONTAINER } from '../../Constants/Constant';

function MyProgressTabPanel() {
  return (
    <div>
      <div className="grid">
        <div className="col-3 firstContent">
          <div className="innerdivcontent">
            <p className="progressheadingclass">
              The Ledbury
            </p>
            <div className="addresscontainer">
              <img className="locationstyle" src={require('../../assets/images/LocationImg.png')} alt="Avatar" />
              <p className="addressclss">29 Parliament Row, Hanley, Stoke-on-Trent ST1 1PW, United Kingdom</p>
            </div>
            <p className="progclss">{CONSTANTFORMCONTAINER.PROGRESS}: 25%</p>
            <div className="progressbardiv">
              <ProgressBar color="green" className="progressbarstyle" value={25} />
              <span>100%</span>
            </div>
            <div className='challengeenddate'>{CONSTANTFORMCONTAINER.ENDINGDATA} 31st March 2023</div>
          </div>
        </div>
        <div className="col-5 SecondContent">
          <FormContainer />
        </div>
        <div className="col-3 thirdcontainer">
          <LineChart chartStyle={{
            marginTop: "20px",
            width: "25vw",
            height: "50vh",
            }}
            linechartdropdownstyle={{
              marginLeft: "16vh",
              marginTop: "5.7px",
              width:"5vw",
            }}
            titleStyle={{
              fontSize: "17px",
              color: "black",
              fontWeight: "normal",
              marginTop: "2px",
              marginLeft: "5px"
            }} />
        </div>
      </div>
    </div>
  )
}
export default MyProgressTabPanel;