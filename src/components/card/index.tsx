import React from 'react';
import PaymentForm from "./PaymentForm";
import VisaLogo from "../../assets/VisaLogo";
import SavedCards from "./SavedCards";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ModeSelector} from "../../store/selectors/cardSelectors";
import {PaymentsContainer, PaymentsHeader, PaymentsHeaderMain, PaymentsHeaderSecondary, PaymentsHeaderSecondaryText,
PaymentsBody} from './CardStyledComponents'

const CardPayments = () => {

    const payMode = useTypedSelector(ModeSelector)

    return (
        <PaymentsContainer>
            <PaymentsHeader>
                <PaymentsHeaderMain>Payments</PaymentsHeaderMain>
               <PaymentsHeaderSecondary>
                   <PaymentsHeaderSecondaryText>Pay with credit card</PaymentsHeaderSecondaryText>
                   <VisaLogo/>
               </PaymentsHeaderSecondary>
            </PaymentsHeader>
            <PaymentsBody>
                {payMode  ?    <PaymentForm/> : <SavedCards/>}
            </PaymentsBody>
        </PaymentsContainer>
    );
};

export default CardPayments;