import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import Logocomp from "../StoreManagerHome/Logocomponent";
import { CONSTSTOREHOME, NOTIFICATIONBODY } from "../../Constants/Constant";
import { OverlayPanel } from "primereact/overlaypanel";
import { Avatar } from "primereact/avatar";
import "../../components/NotificationPage/NotificationStyle.css";
function HeaderPage() {
  const navigate = useNavigate();
  //redirect to storemanager login page on click of logout button.
  const logouthandle = () => {
    navigate("/storemanagerlogin");
  };

  const handleprofile = () => {
    navigate("/storemanagerprofile");
  }
    const handleViewMoreClickHead = () => {
        navigate('/enrollpage');
    }
  
  const op = useRef(null);

  const notificationdata = require("../NotificationPage/NotificationsData .json");
  return (
    <>
      <div className="grid mynavbar">
        <div className="col-3 logodiv">
          <Logocomp />
        </div>
        <div className="grid col-6 mysearch-container">
          <div className="col-7">
            <div className="search-bar">
              <input
                type="text"
                placeholder={CONSTSTOREHOME.SEARCH}
                className="search-inputtwo"
              />
              <span className="search-icontwo">
                <RiSearchLine />
              </span>
            </div>
          </div>
        </div>
        <div className="col-4 profilepart">
          <div className="notificationclass">
            <button
              className="notificationbtn"
              onClick={(e) => op.current.toggle(e)}
            >
              <img
                className="notificationimg"
                src={require("../../assets/images/notification.png")}
                alt="Image"
              />
            </button>
            <OverlayPanel ref={op}>
              <div className="your-card-container">
                <div className="notification-header">
                  <h1 className="heading-notification">
                    {NOTIFICATIONBODY.NOTIFICATION}
                  </h1>
                  <button className="mark-all-read">
                    {NOTIFICATIONBODY.MARKASALLREAD}
                  </button>
                </div>
                <div className="notification-body">
                  {notificationdata.map((notification) => {
                    switch (notification.notificationtypeid) {
                      case 1:
                        return (
                          <div
                            className="notification-content"
                            style={{
                              backgroundColor: notification.isviewed
                                ? "#edffe9"
                                : "#fff",
                            }}
                          >
                            <div>
                              <img
                                className="launchchallengeimgstyle"
                                src={require("../../assets/images/notificaionstar.png")}
                                alt="Image"
                              />
                            </div>
                            <div className="txtcontent">
                              <p className="paragrphstyle">
                                {NOTIFICATIONBODY.NEWCHALLENGELAUNCHED}
                              </p>
                              <p className="challengename-style">
                                {notification.challengename}
                                <button className="parabuttonstyle" onClick={handleViewMoreClickHead}>
                                  {notification.action}
                                </button>
                              </p>
                              <p className="date-style">
                                {notification.recaddeddate}
                              </p>
                            </div>
                          </div>
                        );
                      case 2:
                        const initial = notification.recaddedby.at(0);
                        return (
                          <div
                            className="notification-content"
                            style={{
                              backgroundColor: notification.isviewed
                                ? "#edffe9"
                                : "#fff",
                            }}
                          >
                            <div>
                              <Avatar label={initial} className="avatar" />
                            </div>
                            <div className="txtcontent">
                              <div className="display">
                                <p className="enrolledinchallnge">
                                  {notification.recaddedby}
                                </p>{" "}
                                {NOTIFICATIONBODY.ENROLLEDTHE}
                                <p className="challengename-style">
                                  {" "}
                                  {notification.challengename}
                                </p>
                              </div>
                              <button className="parabuttonstyleReviewnow">
                                {notification.action}
                              </button>
                              <p className="date-style">
                                {notification.recaddeddate}
                              </p>
                            </div>
                          </div>
                        );
                      case 3:
                        const initialtwo = notification.recaddedby.at(0);
                        return (
                          <div
                            className="notification-content"
                            style={{
                              backgroundColor: notification.isviewed
                                ? "#edffe9"
                                : "#fff",
                            }}
                          >
                            <div className="avatarmargin">
                              <Avatar
                                label={initialtwo}
                                className="avatartwo"
                              />
                            </div>
                            <div className="txtcontent">
                              <p className="paragrphstyle fontweight-display">
                                {notification.recaddedby}
                              </p>
                              <p className="display"> {NOTIFICATIONBODY.HASREGISTERED}
                              </p>
                              <p className="date-style">
                                {notification.recaddeddate}
                              </p>
                              <div className="acceptdeclinebtncontainer">
                                <button className="acceptbtn">
                                  {NOTIFICATIONBODY.APPROVE}
                                </button>
                                <button className="declinebtn">
                                  {NOTIFICATIONBODY.DECLINE}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      default:
                        return null; // or any fallback element for unknown types
                    }
                  })}
                </div>
              </div>
            </OverlayPanel>
          </div>
          <div className="pictureprofile">
            <div className="namecomproleclss">
              <p className="profile-name">Kadin Septimus</p>
              <p className="profile-name companyrole">Company Leadership</p>
            </div>
            <button className="profileavatar-container" onClick={handleprofile}>
              <img
                className="avatar"
                src={require("../../assets/images/60111.jpg")}
                alt="Avatar"
              />
            </button>
          </div>
          <div className="Logoutbtnmrgin">
            <button className="logoutbtn" onClick={logouthandle}>
              {CONSTSTOREHOME.LOGOUT}
              <img
                className="logoutimgclss"
                src={require("../../assets/images/Logout.png")}
                alt="Image"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderPage;
