import React, { useState } from 'react';
import './ChallengeOverviewStyle.css';
import { Divider } from "@react-md/divider";
import OverviewLeft from './OverviewLeft';
import OverviewRight from './OverViewRight';

function ChallengeOverviewTabPanel() {

  const [stackedColOpen, setStackedColOpen] = useState(false);
  const [stackedHorzOpen, setStackedHorzOpen] = useState(false);
  return (
    <>
      <div className="displayflex">
        <div className="overviewleftcontainer">
          <OverviewLeft setStackedColOpen={setStackedColOpen} setStackedHorzOpen={setStackedHorzOpen} />
        </div>
        <Divider className="custom-divider" />
        <div className="overviewRightcontainer">
          <div className="chartcontainer">
            <div className="eachgraph">
              {stackedColOpen ? (<OverviewRight isGraphVisibleProp={"stackedColOpen"} />) : null}
            </div>
            <div className="eachgraph">
              {stackedHorzOpen ? (<OverviewRight isGraphVisibleProp={"stackedHorzOpen"} />) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChallengeOverviewTabPanel;