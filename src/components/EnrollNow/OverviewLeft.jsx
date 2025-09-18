import React,{useState} from 'react';
import './OverviewLeftStyle.css';
import { Dropdown } from 'primereact/dropdown';
import {CONSTANTCHALLENGEOVERVIEW} from "../../Constants/Constant";
import './DropdwonContentStyle.css';

function OverviewLeft(props) {

  const [selectedField, setSelectedField] = useState(null);
  const [selectedxaxis, setSelectedxaxis] = useState(null);
  const [selectedyaxis, setSelectedyaxis] = useState(null);
  const [selectedvalue, setSelectedvalue] = useState(null);
  const [buttonLabel, setButtonLabel] = useState(CONSTANTCHALLENGEOVERVIEW.PREVIEW);
  const [Dropdownopen, setDropdownopen] = useState(false); //set to false when save button is clicked
  const [filter, setFilter] = useState('');
  const [stackColDisable, setStackColDisable] = useState(false);
  const [stackHorzDisable, setStackHorzDisable] = useState(false);

  const handlePreviewSubmit = () => {
      setButtonLabel(CONSTANTCHALLENGEOVERVIEW.SAVE);
  }
  const handleSave = () => {
      if(selectedField !== null && selectedxaxis !== null && selectedyaxis !== null && selectedvalue !== null){
          setSelectedField(null);
          setSelectedxaxis(null);
          setSelectedyaxis(null);
          setSelectedvalue(null);
          setDropdownopen(false);
          setStackHorzDisable(false);
          setStackColDisable(false);
          setButtonLabel( CONSTANTCHALLENGEOVERVIEW.PREVIEW);
      }
  }

  const handleButtonClick = () => {
      if (buttonLabel === CONSTANTCHALLENGEOVERVIEW.PREVIEW) {
        handlePreviewSubmit();
      } else if (buttonLabel === CONSTANTCHALLENGEOVERVIEW.SAVE) {
        handleSave();
      }};
  const checkbtndisable = () => {
      return (selectedField === null || selectedxaxis === null || selectedyaxis === null || selectedvalue === null)?true:false;
  }
  
  const fields = [
      { name: 'Carbon Saving' },
      { name: 'Package Saving' },
      { name: 'Waste Saving'},
      { name: 'Dollar Saving'},
  ];

  const xaxises = [
      { name: 'store'},
      { name: 'week' },
      { name: 'amount'},
      
  ];

  const yaxises = [
      { name: 'store'},
      { name: 'week' },
      { name: 'amount'},
  ];

  const values = [
      { name: 'All Stores'},
      { name: 'store1'},
      { name: 'store2'},
      { name: 'store3'},
      { name: 'store4'}
  ];

  const filteredFields = fields.filter(field => field.name.toLowerCase().includes(filter.toLowerCase()));
  const filteredXaxis = xaxises.filter(xaxis => xaxis.name.toLowerCase().includes(filter.toLowerCase()));
  const filteredYaxis = yaxises.filter(yaxis => yaxis.name.toLowerCase().includes(filter.toLowerCase()));
  const filteredValue = values.filter(value => value.name.toLowerCase().includes(filter.toLowerCase()));
  const handlestackedcolumnopen = () => {
    setDropdownopen(true);
    setStackHorzDisable(true);
    props.setStackedColOpen(true);
  }
  const handlestackedhorizontalopen = () => {
    setDropdownopen(true);
    setStackColDisable(true);
    props.setStackedHorzOpen(true);
  }
  return (
    <>
      <div className="overviewleftstyle">
        <div className="allbtncontainer">
          <p className="chartsheading">{CONSTANTCHALLENGEOVERVIEW.CHARTS}</p>
          <div className="flexdisplaytwo">
            <button className="containerbtnone" disabled={stackColDisable} data-testid="stacked-column-btn" onClick={handlestackedcolumnopen}><img className="newchallengeimgstyle" src={require('../../assets/images/stackedcolumn.png')} alt="Image" /></button>
            <button className="containerbtn" disabled={stackHorzDisable} data-testid="stacked-horz-btn" onClick={handlestackedhorizontalopen}><img className="newchallengeimgstyle" src={require('../../assets/images/stackedhorz.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/basicbar.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/Line chart@2x.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/Area chart.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/Area chart multiple.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/Doughnut two slice.png')} alt="Image" /></button>
            <button className="containerbtn"><img className="newchallengeimgstyle" src={require('../../assets/images/Piechart three slice.png')} alt="Image" /></button>
          </div>
        </div>
        <div>
          {Dropdownopen ? (<>
            <p className="axisheading">{CONSTANTCHALLENGEOVERVIEW.FIELD}</p>
            <div className="">
                <Dropdown
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.value)}
                    options={filteredFields}
                    filter
                    filterBy="name"
                    filterValue={filter}
                    onFilterValueChange={e => setFilter(e.target.value)}
                    optionLabel="name"
                    placeholder={CONSTANTCHALLENGEOVERVIEW.SELECTFIELD}
                    className="w-full md:w-14rem dropdownclss"
                />
            </div>
            <div className="displayflex">
                <div>
                    <p className="axisheading">{CONSTANTCHALLENGEOVERVIEW.XAXIS}</p>
                    <Dropdown
                        value={selectedxaxis}
                        onChange={(e) => setSelectedxaxis(e.value)}
                        options={filteredXaxis}
                        filter
                        filterBy="name"
                        filterValue={filter}
                        onFilterValueChange={e => setFilter(e.target.value)}
                        optionLabel="name"
                        placeholder={CONSTANTCHALLENGEOVERVIEW.SELECTXAXIS}
                        className="w-full md:w-14rem xaxisdropdownclss"
                    />
                </div>
                <div className="marginstyle">
                    <p className="axisheading">{CONSTANTCHALLENGEOVERVIEW.YAXIS}</p>
                    <Dropdown
                        value={selectedyaxis}
                        onChange={(e) => setSelectedyaxis(e.value)}
                        options={filteredYaxis}
                        filter
                        filterBy="name"
                        filterValue={filter}
                        onFilterValueChange={e => setFilter(e.target.value)}
                        optionLabel="name"
                        placeholder={CONSTANTCHALLENGEOVERVIEW.SELECTYAXIS}
                        className="w-full md:w-14rem xaxisdropdownclss"
                    />
                </div>
            </div>
            <div>
                <p className="axisheading">{CONSTANTCHALLENGEOVERVIEW.VALUE}</p>
                <Dropdown
                    value={selectedvalue}
                    onChange={(e) => setSelectedvalue(e.value)}
                    options={filteredValue}
                    filter
                    filterBy="name"
                    filterValue={filter}
                    onFilterValueChange={e => setFilter(e.target.value)}
                    optionLabel="name"
                    placeholder={CONSTANTCHALLENGEOVERVIEW.SELECTVALUE}
                    className="w-full md:w-14rem dropdownclss"
                />
            </div>
            <button className="previewbtnclss" style={{ backgroundColor: (checkbtndisable() ? '#5bad80' : '#009b45') }} disabled={checkbtndisable()} onClick={handleButtonClick} data-testid="save-previewbtn"> {buttonLabel}</button>
            </>):("")}
        </div>
      </div>
    </>
  )
}
export default OverviewLeft;