import React from 'react';
import InputForms from "./InputForms";
import VisaLogo from "../../assets/VisaLogo";

const CardPayments = () => {
    return (
        <div className='payments-container'>
            <div className={'payments-header'}>
                <div className={'payments-header-main'}>Payments</div>
               <div className={'payments-header-secondary'}>
                   <span>Pay with credit card</span>
                   <VisaLogo/>
               </div>
            </div>
            <div className={'payments-body'}>
                 <InputForms/>
            </div>
        </div>
    );
};

export default CardPayments;