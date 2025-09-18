import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Formcontainerstyle.css";
import {CONSTANTFORMCONTAINER} from "../../Constants/Constant";

const FormContainer = () => {
    const [sale, setSale] = useState("");
    const [amt, setAmt] = useState("");
    const [amtReqdError, setAmtReqdError] = useState(false);
    const [saleReqdError, setSaleReqdError] = useState(false);
    const navigate = useNavigate();
    //function for validating the amount field.
    const amtreqvalid = (e) => {
        if (e.target.value === '') { setAmtReqdError(true);}                                
        else { setAmtReqdError(false);}
    };
    //function for validating the sale field.
    const requiredSale = (e) => {
        if (e.target.value === '') { setSaleReqdError(true); }
        else { setSaleReqdError(false); }
    };
    //function for handling the submit button functionalities.
    const formsubmithandle = () => {
        if (amt !== '' && sale !== '' && amtReqdError === false && saleReqdError === false) {
            navigate('/storehome');
        setTimeout(() => {
            toast.success("Success - Packaging Peril Challenge is enrolled successfully.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                background: 'yellow'
            });
            }, 500);
        
    }}
    // function for handling clear button functionalities, which clears all the data and errors of
    // respective field.
    const makeClear = () => {
        setSale('');
        setAmt('');
        setAmtReqdError(false);
        setSaleReqdError(false);
    }
    //if all the fields are filled and there is no error in the fields, then the submit button 
    //will be enabled else, it will be disabled.
    const submitBtnDisable = () => {
        if (amt !== '' && sale !== '' && amtReqdError === false && saleReqdError === false){ return false;}
        return true;
    }
    return (
        <>
            <div className="formcontainer">
                <div className="formhistorybtn">
                    <p className="formheading">{CONSTANTFORMCONTAINER.FILLDATA}</p>
                    <button className="historybtn">{CONSTANTFORMCONTAINER.SEEHISTORY}</button>
                </div>
                <div>
                    <div className="field">
                        <InputText
                            value={sale}
                            className="p-inputtext-sm formtextfieldstyle"
                            placeholder= {CONSTANTFORMCONTAINER.ENTERTODAYSALES}
                            onChange={(e) => {
                                setSale(e.target.value);
                                requiredSale(e);
                            }}
                            onBlur={(e) => { requiredSale(e); }}
                            data-testid="sale-input"
                        />
                        {saleReqdError ? (
                            <span className="formerr">
                                {CONSTANTFORMCONTAINER.ERRMSG}
                            </span>
                        ) : ("")}
                    </div>
                    <div className="field textfieldtwo">
                        <InputText
                            value={amt}
                            className="p-inputtext-sm formtextfieldstyle"
                            placeholder={CONSTANTFORMCONTAINER.ENTERAMNTPURCHSED}
                            onChange={(e) => { setAmt(e.target.value); amtreqvalid(e); }}
                            onBlur={(e) => { amtreqvalid(e); }}
                            data-testid="amt-input"
                        />
                        {amtReqdError ? (
                            <span className="formerr">
                                {CONSTANTFORMCONTAINER.ERRMSG}
                            </span>
                        ) : ("")}
                    </div>
                </div>
                <div className="formbtncontainer">
                    <button className="cleardatabtn" onClick={makeClear} data-testid="make-clear-button">
                        {CONSTANTFORMCONTAINER.CLEAR}
                    </button>
                    <button className="submitdatabtn" disabled={submitBtnDisable()} style={{ backgroundColor: (submitBtnDisable() ? '#7bb796' : '#009b45') }} onClick={formsubmithandle}>
                        {CONSTANTFORMCONTAINER.SUBMITDATA}
                    </button>
                </div>
            </div>
            <ToastContainer rtl={false} autoClose={false} />
        </>
    )
}
export default FormContainer;