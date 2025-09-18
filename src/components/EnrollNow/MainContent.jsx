import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./MainContentStyle.css";
import MyProgressTabPanel from "./MyProgressTabPanel.jsx";
import MapContainer from "../MapView/MapView.jsx";
import ChallengeDetails from "./ChallengeDetails.jsx";
import { CONSTANTFORMCONTAINER, MAPVIEWS, CONSTSTOREHOME, CONSTANTCHALLENGEOVERVIEW } from "../../Constants/Constant";
import { Dropdown } from "primereact/dropdown";
import "../../components/NotificationPage/NotificationStyle.css";
import ChallengeOverviewTabPanel from "./ChallengeOverviewTabPanel";


const MainContent = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [selectedcountry, setSelectedcountry] = useState(null);
    const [selectedcoords, setSelectedcoords] = useState(null);
    const [country, setCountry] = useState([]);
    const [StateList, setStateList] = useState([]);
    const [tab, setTab] = useState(0);
    function handleTabChange(tabnum) {
        setTab(tabnum);
    }
    const getcountry = async () => {
        const response = await fetch("http://localhost:8080/api/getCountryList");
        const data = await response.json();
        if (response.ok) {
            setCountry(data);
        }
    }
    const getstate = async (countryvalue) => {

        const response = await fetch(`http://localhost:8080/api/getstateList?countryid=${countryvalue.countryid}`);
        const data = await response.json();
        if (response.ok) {
            setStateList(data);
        }
    }
    useEffect(() => {
        getcountry();
    }, [selectedcoords]);

    const handleItemClickstate = (e) => {
        e.stopPropagation();
        setSelectedState(e.value);
    };
    const handleItemClick = (e) => {
        e.stopPropagation();
    };
    return (
        <Tabs selectedIndex={tab} onSelect={handleTabChange} className='entiretabstyle' data-testid="tab-button">
            <TabList style={{ height: '63px', display: 'flex' }}>
                <Tab className="custom-tab"><p className="tabheadingclss">{CONSTANTFORMCONTAINER.CHALLENGEDETAILS}</p></Tab>
                <Tab className="custom-tab"><p className="tabheadingclss">{CONSTANTFORMCONTAINER.MYPROGRESS}</p></Tab>
                <Tab className="custom-tab"><p className="tabheadingclss">{CONSTANTCHALLENGEOVERVIEW.CHALLENGEOVERVIEW}</p></Tab>
                <Tab className="custom-tab"><p className="tabheadingclss">{CONSTANTFORMCONTAINER.MAPVIEW}</p></Tab>
                {tab === 3 && (
                    <div className='dropdowncontainertwo' >
                        <div className="custom-tab-dropdown" >
                            <Dropdown
                                value={selectedcountry}
                                onChange={(e) => {
                                    setSelectedcountry(e.value)
                                    setSelectedcoords(e.value)
                                    getstate(e.value)
                                }}
                                options={country}
                                onClick={handleItemClickstate}
                                optionLabel={MAPVIEWS.COUNTRYNAME}
                                placeholder={CONSTSTOREHOME.SELECTCOUNTRY}
                                className="statedropdownclass"
                            />
                        </div>
                        <div className="custom-tabtwo">
                            <Dropdown
                                value={selectedState}
                                onChange={(e) => {
                                    setSelectedState(e.value)
                                    setSelectedcoords(e.value)
                                }}
                                options={StateList}
                                onClick={handleItemClick}
                                optionLabel={MAPVIEWS.STATENAME}
                                placeholder={CONSTSTOREHOME.SELECTSTATE}
                                className="statedropdownclass"
                            />
                        </div>
                    </div>
                )}
            </TabList>
            <TabPanel>
                <ChallengeDetails />
            </TabPanel>
            <TabPanel>
                <MyProgressTabPanel />
            </TabPanel>
            <TabPanel>
                <ChallengeOverviewTabPanel />
            </TabPanel>
            <TabPanel>
                <MapContainer selectedCoords={selectedcoords} />
            </TabPanel>
        </Tabs>
    );
}
// }
export default MainContent;