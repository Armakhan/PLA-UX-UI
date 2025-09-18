import React, { useState, useEffect } from 'react';
import "./ProfileMyChallengeStyle.css";
import { CONSTANTPROFILE, CONSTANTLEFTCONTENT } from '../../Constants/Constant';

export default function ProfileMyChallenges() {
    const [data, setData] = useState(null); // Initial state

    useEffect(() => {
        async function fetchData() {
            const baseUrl = 'http://localhost:8080/api/challengeStatusCount?userid=deep123';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                },
            };
            const response = await fetch(baseUrl, options);
            const jsonData = await response.json();
            setData(jsonData);
        }

        fetchData();
    }, []);

    const completedchallenge = data ? data.completed : "";
    const numDigits = completedchallenge.toString().length;
    const digitcompleted = numDigits > 1 ? <p className="twodigitparastyle">{completedchallenge}</p> : <p className="onedigitparastyle">{completedchallenge}</p>;
    const ongoingchallenge = data ? data.Ongoing : "";
    const ongoingDigits = ongoingchallenge.toString().length;
    const digitongoing =  ongoingDigits > 1 ? <p className="twodigitparastyle">{ongoingchallenge}</p> : <p className="onedigitparastyle">{ongoingchallenge}</p>;

    if (data !== null) {
        return (
            <div className="entireprofilechllnge">
                <p className="mychallengeheading">{CONSTANTPROFILE.MYCHALLENGES}</p>
                <div className="mychallengecontainer">
                    <div className='displayflex'>
                        <div className="completedchallenge">
                            <p className="challengecountstyle">{digitcompleted}</p>
                            <p className="challengestypestyle">{CONSTANTPROFILE.COMPLETEDCHALLENGES}</p>
                        </div>
                        <div className="ongoingchallenge">
                            <p className="challengecountstyle">{digitongoing}</p>
                            <p className="challengestypestyle">{CONSTANTLEFTCONTENT.ONGOINGCHALLENGES}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
