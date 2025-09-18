import React, { useState, useEffect } from "react";
import "./ProfileStyle.css";
import { CONSTANTPROFILE } from "../../Constants/Constant";

export default function ProfileLeft() {
    const [data, setData] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);
    useEffect(() => {
        async function fetchData() {
                const baseUrl = 'http://localhost:8080/api/getProfileDetails?userid=deep123';
                const response = await fetch(baseUrl);
                const jsonData = await response.json();
                if (jsonData.userdetails) {
                    setProfilePhoto(() => jsonData.userdetails.profilephoto);
                }
                setData(jsonData);          
        }
        fetchData();
    }, []);
    const handlePhotoUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = async () => {
            const photoData = reader.result.split(',')[1];
            const uploadData = {
                userid: 'deep123',
                profilephoto: photoData,
            };
            const uploadUrl = 'http://localhost:8080/api/uploadPhoto';
            const uploadOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(uploadData),
            };
            try {
                const response = await fetch(uploadUrl, uploadOptions);
                if (response.status === 200) {
                    setUploadStatus(CONSTANTPROFILE.SUCCESS);
                } else {
                    setUploadStatus(CONSTANTPROFILE.ERROR);
                }
            } catch (error) {
                setUploadStatus(CONSTANTPROFILE.ERROR);
            }
        };

        reader.readAsDataURL(file);
    };

    const renderProfileImage = () => {
        if (uploadStatus ===  CONSTANTPROFILE.SUCCESS) {
            return <p>{CONSTANTPROFILE.PHOTOUPLOAD}</p>;
        } else if (uploadStatus === CONSTANTPROFILE.ERROR) {
            return <p>{CONSTANTPROFILE.PHOTOFAILED}</p>;
        } else if (profilePhoto !== null) {
            return <img className="profileimg" src={`data:image/jpeg;base64,${profilePhoto}`} alt="Profile" />;
        } else {
            return <img className="profileimg" src={require('../../assets/images/60111.jpg')} alt="Image" />;
        }
    };
    if (data !== null) {
        return (
            <>
                <div className="profileleftcontainer">
                    <div className="imgsidedetails">
                        <div className="profileimg-container">
                            {renderProfileImage()}
                            <label htmlFor="photoInput" className="camera-button">
                                <img src={require('../../assets/images/camera.png')} alt="Camera" />
                            </label>
                            <input
                                type="file"
                                id="photoInput"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handlePhotoUpload}
                            />
                        </div>
                        <div className="namedetails">
                            <p className="imgsidename">{data.userdetails.username}</p>
                            <p className="imgsidemail">{data.userdetails.email}</p>
                            <p className="imgsidelocation displayflex"><img className="locstyle" src={require('../../assets/images/LocationImg.png')} alt="Image" />{data.citydetails.cityname}, {data.citydetails['state_master.statename']}</p>
                        </div>
                    </div>
                    <br />
                    <p className="personaldetailhead">{CONSTANTPROFILE.PERSONALDETAILS}</p>
                    <br />
                    <div className="profilelefttablecontainer">
                        <table className="profilelefttable">
                            <tr>
                                <td className="tablestylehead whiteborder">{CONSTANTPROFILE.FIRSTNAME}</td>
                                <td className="tablestylehead whiteborder">{CONSTANTPROFILE.EMAILADDRESS}</td>
                            </tr>
                            <tr className="valuerow">
                                <td className="tablestylevalue whiteborder">{data.userdetails.username}</td>
                                <td className="tablestylevalue whiteborder" >{data.userdetails.email}</td>
                            </tr>
                            <br />
                            <tr>
                                <td className="tablestylehead whiteborder" >{CONSTANTPROFILE.EMPLOYEEID}</td>
                                <td className="tablestylehead whiteborder" >{CONSTANTPROFILE.STOREID}</td>
                            </tr>
                            <tr className="valuerow">
                                <td className="tablestylevalue whiteborder" >{data.userdetails.userid}</td>
                                <td className="tablestylevalue whiteborder" >{data.userdetails.storeid}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="loadingstyle">{CONSTANTPROFILE.LOADING}</div>
            </>
        )
    }
}