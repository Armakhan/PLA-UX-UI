import React, { useEffect, useState } from "react";
import "./ProfileMySavingsStyle.css";
import { CONSTANTPROFILE } from "../../Constants/Constant";

export default function ProfileMySavings() {
    const [data, setData] = useState(""); // Initial state
    useEffect(() => {
        async function fetchData() {
            const baseUrl = 'http://localhost:8080/api/getMySavings?userid=deep123';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                },
            };
            const response = await fetch(baseUrl, options);
            const jsonData = await response.json();
            setData(jsonData);// Update the state with the fetched data
        }
        fetchData(); // Fetch data when the component mounts
    }, []);

    const datadollarsaved = data ? parseInt(data.savings.dollarsaved) : "";
    const dollardigit = datadollarsaved.toString().length;
    const digitdollarsaved = dollardigit > 1 ? <p className="savngstwodigitparastyle">{datadollarsaved}</p> : <p className="savngsonedigitparastyle">{datadollarsaved}</p>;

    const datawastesaved = data ? parseInt(data.savings.wastesaved) : "";
    const wastedigit = datawastesaved.toString().length;
    const digitwaste = wastedigit > 1 ? <p className="savngstwodigitparastyle">{datawastesaved}</p> : <p className="savngsonedigitparastyle">{datawastesaved}</p>;

    const datacosaved = data ? parseInt(data.savings.carbonemissionsaved) : "";
    const codigit = datacosaved.toString().length;
    const digitco = codigit > 1 ? <p className="savngstwodigitparastyle">{datacosaved}</p> : <p className="savngsonedigitparastyle">{datacosaved}</p>;


    if (data !== null) {
        return (
            <div className="mysavingscontainer">
                <p className="mysavingsheading">{CONSTANTPROFILE.MYSAVINGS}</p>
                <div className="displayflex">
                    <div>
                        <div className="numbercontainer">
                            {digitdollarsaved}
                        </div>
                        <p className="unitstyle">{CONSTANTPROFILE.MILLION}</p>
                        <p className="savingstypestyle">{CONSTANTPROFILE.DOLLARSAVINGS}</p>
                    </div>
                    <div>
                        <div className="numbercontainertwo">
                            {digitwaste}
                        </div>
                        <p className="unitstyletwo">{CONSTANTPROFILE.TONNS}</p>
                        <p className="wastesavingstypestyle">{CONSTANTPROFILE.WASTESAVINGS}</p>
                    </div>
                    <br />
                    <div>
                        <div className="numbercontainerthree">
                            {digitco}
                        </div>
                        <p className="unitstylethree">{CONSTANTPROFILE.TONNS}</p>
                        <p className="cosavingstypestyle">{CONSTANTPROFILE.CO}<sub>{CONSTANTPROFILE.TWO}</sub> {CONSTANTPROFILE.SAVINGS}</p>
                    </div>
                </div>
            </div>
        );
    }
}