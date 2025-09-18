//create a functional component with react and export it. and inside the return there shoud be component which contains two divs one after another,. 1st div contain 30% of height and 2nd div conatin 50% of the height. and in 1st div there should be a button and a text and in 2nd div there should be a text and a button. and the text should be positioned in the center of the div. and the button should be positioned in the bottom of the div. and the background color of the 1st div should be red and the background color of the 2nd div should be blue.
import React, { useState, useEffect } from "react";
import "./ProfileRightStyle.css";
import MySavings from "./ProfileMySavings";
import MyChallenges from "./ProfileMyChallenges";
import LineChart from "../LineChart/LineChart";
import { CONSTANTPROFILE } from "../../Constants/Constant";
export default function ProfileRight() {

    const [data, setData] = useState(null); // Initial state
    useEffect(() => {
        async function fetchData() {
            const baseUrl = 'http://localhost:8080/api/getMyProgressgraph?userid=deep123';
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
        fetchData(); // Fetch data when the component mounts
    }, []);

    const weekonedollar = data ? parseInt(data.getweeklydata.week1[0].dollarssaved) : "";
    const weektwodollar = data ? parseInt(data.getweeklydata.week2[0].dollarssaved) : "";
    const weekthreedollar = data ? parseInt(data.getweeklydata.week3[0].dollarssaved) : "";
    const weekfourdollar = data ? parseInt(data.getweeklydata.week4[0].dollarssaved) : "";
    const weekonewastesaved = data ? parseInt(data.getweeklydata.week1[0].wastesaved) : "";
    const weektwowastesaved = data ? parseInt(data.getweeklydata.week2[0].wastesaved) : "";
    const weekthreewastesaved = data ? parseInt(data.getweeklydata.week3[0].wastesaved) : "";
    const weekfourwastesaved = data ? parseInt(data.getweeklydata.week4[0].wastesaved) : "";
    const weekonecosaved = data ? parseInt(data.getweeklydata.week1[0].emissionSaved) : "";
    const weektwocosaved = data ? parseInt(data.getweeklydata.week2[0].emissionSaved) : "";
    const weekthreecosaved = data ? parseInt(data.getweeklydata.week3[0].emissionSaved) : "";
    const weekfourcosaved = data ? parseInt(data.getweeklydata.week4[0].emissionSaved) : "";
    const dataDollar = [weekonedollar, weektwodollar, weekthreedollar, weekfourdollar];
    const dataWaste = [weekonewastesaved, weektwowastesaved, weekthreewastesaved, weekfourwastesaved];
    const dataCo = [weekonecosaved, weektwocosaved, weekthreecosaved, weekfourcosaved];

    if (data !== null) {
        return (
            <>
                <div className="profilerightcontainer">
                    <div className="displayflex">
                        <MySavings />
                        <MyChallenges />
                    </div>
                    <p className="rightprofileheading">{CONSTANTPROFILE.MYPROGRESS}</p>
                    <div className="linechartcontainer">
                        <LineChart chartStyle={{
                            marginTop: "10px",
                            width: "1vw",
                            height: "3vh",
                        }}
                            linechartdropdownstyle={{
                                marginLeft: "16vh",
                                marginTop: "5.7px",
                                width: "5vw",
                            }}
                            titleStyle={{
                                fontSize: "14px",
                                color: "black",
                                marginTop: "2px",
                                marginLeft: "5px"
                            }}

                            dataset1={{
                                data: dataCo,
                                borderColor: "#72c166",
                            }}
                            dataset2={{
                                data: dataDollar,
                                borderColor: "#72c166",
                            }}
                            dataset3={{
                                data: dataWaste,
                                borderColor: "#72c166",
                            }}
                        />
                    </div>
                </div>
            </>
        );
    }
}
