import React, { useEffect, useState } from "react";
import "./LeftContentStyle.css";
import { Avatar } from "primereact/avatar";
import Createnew from "../Createnewchallange/Createnewchallange.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CONSTANTLEFTCONTENT } from "../../Constants/Constant";
import ParticipateContent from "../StoreManagerHome/ParticipateContent";
import MyChallengeContent from "../StoreManagerHome/MyChallengeContent";

//Function that is responsiple for rendering the entire tab present on left side.
export default function LeftContent() {
  const [selectedChallange, setSelectedChallange] = useState("all");
  const [tab, setTab] = useState(0);
  const [createNewChallenge, setCreateNewChallenge] = useState(false);
  const [allChallangeContentVIsible, setAllChallangeContenVisible] =useState(true);
  const [ongoingChallangeContentVIsible, setOngoingChallangeContenVisible] =useState(false);
  const [upcomingChallangeContentVIsible, setUpcomingChallangeContenVisible] =useState(false);
  const [enrolledChallangeContentVIsible, setEnrolledChallangeContenVisible] =useState(false);
  const [historicalChallangeContentVIsible,setHistoricalChallangeContenVisible,] = useState(false);
  const [mySelectedChallange, setMySelectedChallange] = useState("all");
  const [allChallangeContentVIsibleMy, setAllChallangeContenVisibleMy] =useState(true);
  const [draftChallangeContentVIsibleMy, setDraftChallangeContenVisibleMy] =useState(false);
  const [publishedChallangeContentVIsibleMy,setPublishedChallangeContenVisibleMy] = useState(false);
  const [myChallengeDetails, setMyChallengeDetails] = useState([]);
  const [participateDetails, setParticipateDetails] = useState([]);
    //Mychallenge && Participate API
    useEffect(() => {
      async function fetchData() {
        const url =
          "http://192.168.29.35:8080/api/getAllMyChallenges?userid=deep123";
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setMyChallengeDetails(data);
        const urlpart =
          "http://192.168.29.35:8080/api/getAllChallengesparticipate?userid=deep123";
        const optionspart = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        };
        const responsepart = await fetch(urlpart, optionspart);
        const datapart = await responsepart.json();
        setParticipateDetails(datapart);
      }
      fetchData(); // Call the fetchData function when the component is mounted
    }, []);
  //event handler to handle the tab change.
  function handleTabChange(tabnum) {
    setTab(tabnum);
  }
  let myallcount = 0;
  let mydraftcount = 0;
  let mypublishedcount = 0;
  let allcount = 0;
  let upcomingcount = 0;
  let enrolledcount = 0;
  let historicalcount = 0;
  let ongoingcount = 0;
  myChallengeDetails.forEach((element) => {
    if (element.status === "draft") {
      mydraftcount++;
    } else if (element.status === "published") {
      mypublishedcount++;
    }
    if (element.hasOwnProperty("challengeid")) {
      myallcount++;
    }
  });
  participateDetails.forEach((element) => {
    if (element.status === "ongoing") {
      ongoingcount++;
    } else if (element.status === "upcoming") {
      upcomingcount++;
    } else if (element.status === "historical") {
      historicalcount++;
    }
    if (
      element.enrollstatus === CONSTANTLEFTCONTENT.ENROLL ||
      element.enrollstatus === CONSTANTLEFTCONTENT.DEFAULTENROLL
    ) {
      enrolledcount++;
    }
    if (element.hasOwnProperty("challengeid")) {
      allcount++;
    }
  });
  useEffect(() => {
    selectedChallange === `${CONSTANTLEFTCONTENT.ALL}`? setAllChallangeContenVisible(true): setAllChallangeContenVisible(false);
    selectedChallange === `${CONSTANTLEFTCONTENT.ONGOING}`? setOngoingChallangeContenVisible(true): setOngoingChallangeContenVisible(false);
    selectedChallange === `${CONSTANTLEFTCONTENT.UPCOMING}`? setUpcomingChallangeContenVisible(true): setUpcomingChallangeContenVisible(false);
    selectedChallange === `${CONSTANTLEFTCONTENT.ENROLLED}`? setEnrolledChallangeContenVisible(true): setEnrolledChallangeContenVisible(false);
    selectedChallange === `${CONSTANTLEFTCONTENT.HISTORICAL}`? setHistoricalChallangeContenVisible(true): setHistoricalChallangeContenVisible(false);
  }, [selectedChallange]);

  useEffect(() => {
    mySelectedChallange === `${CONSTANTLEFTCONTENT.ALL}`? setAllChallangeContenVisibleMy(true): setAllChallangeContenVisibleMy(false);
    mySelectedChallange === `${CONSTANTLEFTCONTENT.PUBLISHED}`? setPublishedChallangeContenVisibleMy(true): setPublishedChallangeContenVisibleMy(false);
    mySelectedChallange === `${CONSTANTLEFTCONTENT.DRAFT}`? setDraftChallangeContenVisibleMy(true): setDraftChallangeContenVisibleMy(false);
  }, [mySelectedChallange]);

  const items = [
    {label: `${CONSTANTLEFTCONTENT.ALLCHALLENGES} ${allcount}`,value: `${CONSTANTLEFTCONTENT.ALL}`,icon: <Avatar label="8" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.ONGOINGCHALLENGES} ${ongoingcount}`,value: `${CONSTANTLEFTCONTENT.ONGOING}`,icon: <Avatar label="3" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.UPCOMINGCHALLENGES} ${upcomingcount}`,value: `${CONSTANTLEFTCONTENT.UPCOMING}`,icon: <Avatar label="5" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.ENROLLED} ${enrolledcount}`,value: `${CONSTANTLEFTCONTENT.ENROLLED}`,icon: <Avatar label="5" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.HISTORICAL}${historicalcount}`,value: `${CONSTANTLEFTCONTENT.HISTORICAL}`,icon: <Avatar label="5" style={{ color: "black" }} />,},
  ];
  const myitems = [
    {label: `${CONSTANTLEFTCONTENT.ALLCHALLENGES} ${myallcount}`,value: `${CONSTANTLEFTCONTENT.ALL}`,icon: <Avatar label="8" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.DRAFT} ${mydraftcount}`,value: `${CONSTANTLEFTCONTENT.DRAFT}`,icon: <Avatar label="3" style={{ color: "black" }} />,},
    {label: `${CONSTANTLEFTCONTENT.PUBLISHED} ${mypublishedcount}`,value: `${CONSTANTLEFTCONTENT.PUBLISHED}`,icon: <Avatar label="5" style={{ color: "black" }} />,},
  ];
  //event handler for the dropdown, which will change the content of the dropdown depending upon the selected value.
  const handleDropdownChange = (e) => {
    setSelectedChallange(e.target.value);
  };
  const myhandleDropdownChange = (e) => {
    setMySelectedChallange(e.target.value);
  };
  const handleParticipate = () => {
    setCreateNewChallenge(false);
  };
  const handleCreateNewChallenge = () => {
    setCreateNewChallenge(true);
  };
  return (
    <Tabs
      selectedIndex={tab}
      onSelect={handleTabChange}
      className="entiretabstyle"
    >
      <TabList style={{ height: "63px", display: "flex" }}>
        <Tab className="custom-tab" onClick={handleParticipate}>
          <p className="participatechallangesclss">
            {CONSTANTLEFTCONTENT.PARTICIPATE}
          </p>
          <p className="participatecount">{allcount}</p>
        </Tab>
        <Tab
          className="custom-tab"
          onClick={handleCreateNewChallenge}
          style={{
            marginTop: "2vh",
            marginLeft: "5px",
            marginRight: "5px",
            padding: "0px",
          }}
        >
          <p className="oldchallangesclss">
            {CONSTANTLEFTCONTENT.MYCHALLENGES}
          </p>
          <p className="mychallengecount">{myallcount}</p>
        </Tab>
        <div>{createNewChallenge ? <Createnew /> : ""}</div>
      </TabList>
      <TabPanel>
        <select
          data-testid="your-select"
          className="participatedropdownstyle"
          value={selectedChallange}
          onChange={handleDropdownChange}
        >
          {items.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div>
          {allChallangeContentVIsible && (<ParticipateContent selectedChallange={selectedChallange} setpartdepend={participateDetails}/>)}
          {ongoingChallangeContentVIsible && (<ParticipateContent selectedChallange={selectedChallange} setpartdepend={participateDetails}/>)}
          {upcomingChallangeContentVIsible && (<ParticipateContent selectedChallange={selectedChallange} setpartdepend={participateDetails}/>)}
          {enrolledChallangeContentVIsible && (<ParticipateContent selectedChallange={selectedChallange} setpartdepend={participateDetails}/>)}
          {historicalChallangeContentVIsible && (<ParticipateContent selectedChallange={selectedChallange} setpartdepend={participateDetails}/>)}
        </div>
      </TabPanel>
      <TabPanel>
        <select
          data-testid="my-select"
          className="mychlldropdownstyle"
          value={mySelectedChallange}
          onChange={myhandleDropdownChange}
        >
          {myitems.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div>
          {allChallangeContentVIsibleMy && (<MyChallengeContent myselectedChallange={mySelectedChallange} settabDepend={myChallengeDetails}/>)}
          {draftChallangeContentVIsibleMy && (<MyChallengeContent myselectedChallange={mySelectedChallange} settabDepend={myChallengeDetails}/>)}
          {publishedChallangeContentVIsibleMy && (<MyChallengeContent myselectedChallange={mySelectedChallange} settabDepend={myChallengeDetails}/>)}
        </div>
      </TabPanel>
    </Tabs>
  );
}
