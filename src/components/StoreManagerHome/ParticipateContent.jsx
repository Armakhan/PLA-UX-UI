import React from 'react';
import "./CardContentStyle.css";
import ParticipateCard from './Participatecard';
import { CONSTANTLEFTCONTENT } from "../../Constants/Constant";
//code for rendering the content depending upon the selected challenge from the dropdown.
export default function ParticipateContent({ selectedChallange,setpartdepend }) {
    return (
        <>
            <div className="entiretabpanel">
                {setpartdepend.map((participate) => {
                    switch (selectedChallange) {
                        case CONSTANTLEFTCONTENT.ONGOING:
                            if (participate.status === CONSTANTLEFTCONTENT.ONGOING) {
                                return (
                                    <>
                                        <ParticipateCard participate={participate} />
                                    </>
                                );
                            }
                            else {
                                return null;
                            }

                        case CONSTANTLEFTCONTENT.UPCOMING:
                            if (participate.status === CONSTANTLEFTCONTENT.UPCOMING) {
                                return (
                                    <>
                                        <ParticipateCard participate={participate} />
                                    </>
                                );
                            }
                            else {
                                return null;
                            }
                        case CONSTANTLEFTCONTENT.ENROLLED:
                            if (participate.enrollstatus === CONSTANTLEFTCONTENT.ENROLL || participate.enrollstatus === CONSTANTLEFTCONTENT.DEFAULTENROLL) {
                                return (
                                    <>
                                        <ParticipateCard participate={participate} />
                                    </>
                                );
                            }
                            else {
                                return null;
                            }
                        case CONSTANTLEFTCONTENT.HISTORICAL:
                            if (participate.status === CONSTANTLEFTCONTENT.HISTORICAL) {
                                return (
                                    <>
                                        <ParticipateCard participate={participate} />
                                    </>
                                );
                            }
                            else {
                                return null;
                            }
                        default:
                            return (
                                <>
                                    <ParticipateCard participate={participate} />
                                </>
                            );
                        }
                })}
            </div>
        </>
    );
}