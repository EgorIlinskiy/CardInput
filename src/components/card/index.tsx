import React from 'react';
import InputForms from "./InputForms";
import VisaLogo from "../../assets/VisaLogo";
import SavedCards from "./SavedCards";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ModeSelector} from "../../store/selectors/cardSelectors";

const CardPayments = () => {

    const payMode = useTypedSelector(ModeSelector)

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