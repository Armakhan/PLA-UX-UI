//create a react functional component with  OverviewRight name and export that.
import React, { useState } from 'react';
import StackedColumn from '../GraphChartFolder/StackedColumn.jsx';
import StackedHorizontal from '../GraphChartFolder/StackedHorizontal.jsx';
import './OverviewRightStyle.css';
import {CONSTANTCHALLENGEOVERVIEW} from "../../Constants/Constant";

export default function OverviewRight({ isGraphVisibleProp }) {

    const [isGraphVisible, setIsGraphVisible] = useState(isGraphVisibleProp);

    const handleClose = () => {
        setIsGraphVisible(false);
    };
    let content;
    if (isGraphVisible === CONSTANTCHALLENGEOVERVIEW.STACKEDCOLOPEN) {
        content = (
            <>
            <button className="close-button" onClick={handleClose} data-testid="close-img"><img className="closeimgstyle" src={require('../../assets/images/closeimg.png')} alt="Image" /></button>
            <StackedColumn data-testid="stacked-column"/>
            </>
        );
    }
    else if (isGraphVisible === CONSTANTCHALLENGEOVERVIEW.STACKEDHORZOPEN) {
        content = (
            <>
            <button className="close-button" onClick={handleClose} data-testid="close-img"><img className="closeimgstyle" src={require('../../assets/images/closeimg.png')} alt="Image" /></button>
            <StackedHorizontal data-testid="stacked-horizontal"/>
            </>
        );
    }
    else {
        content = (
            <>
            </>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}