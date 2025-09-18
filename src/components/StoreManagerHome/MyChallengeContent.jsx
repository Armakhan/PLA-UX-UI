import React from 'react';
import "./CardContentStyle.css";
import MyChallengeCard from './MyChallengeCard';
import {CONSTANTLEFTCONTENT} from "../../Constants/Constant";
//code for rendering the content depending upon the selected challenge from the dropdown.
export default function MyChallengeContent({ myselectedChallange,settabDepend}) {  
  return (
      <>
          <div className="entiretabpanel">
              {settabDepend.map((participate) => {
                  switch (myselectedChallange) {
                      case CONSTANTLEFTCONTENT.PUBLISHED:
                          if (participate.status === CONSTANTLEFTCONTENT.PUBLISHED) {
                            
                              return (
                                  <>
                                      <MyChallengeCard mychallenge={participate} />
                                  </>
                              );
                          }
                          else {
                              return null;
                          }
                       
                      case CONSTANTLEFTCONTENT.DRAFT:
                          if (participate.status === CONSTANTLEFTCONTENT.DRAFT) {
                          return (
                              <>
                                  <MyChallengeCard mychallenge={participate} />
                              </>
                          );
                          }
                          else
                          {
                              return null;
                          }
                        
                      default:
                          return (
                              <>
                                <MyChallengeCard mychallenge={participate} />
                              </>
                          );
                        }
              })}
          </div>
      </>
  );
}
