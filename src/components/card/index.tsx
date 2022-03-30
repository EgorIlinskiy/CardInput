import React from 'react';
import InputForms from "./InputForms";
import VisaLogo from "../../assets/VisaLogo";
import SavedCards from "./SavedCards";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CardPayments = () => {

    const payMode = useTypedSelector((state)=>state.card.payMode)

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
                {payMode  ?    <InputForms/> : <SavedCards/>}

            </div>
        </div>
    );
};

export default CardPayments;