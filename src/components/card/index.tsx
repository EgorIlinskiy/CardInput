import React from 'react';
import PaymentForm from "./PaymentForm";
import VisaLogo from "../../assets/VisaLogo";
import {PaymentsContainer, PaymentsHeader, PaymentsHeaderMain, PaymentsHeaderSecondary, PaymentsHeaderSecondaryText,
PaymentsBody} from './CardStyledComponents'
import {FormattedMessage} from "react-intl";

const CardPayments = () => {


    return (
        <PaymentsContainer>
            <PaymentsHeader>
                <PaymentsHeaderMain>
                    <FormattedMessage
                        id = {"app.card.header.main"}
                        defaultMessage={"Payments"}
                    />
                </PaymentsHeaderMain>
               <PaymentsHeaderSecondary>
                   <PaymentsHeaderSecondaryText>
                       <FormattedMessage
                           id = {"app.card.header.sub"}
                           defaultMessage={"Pay with credit card"}
                       />
                   </PaymentsHeaderSecondaryText>
                   <VisaLogo/>
               </PaymentsHeaderSecondary>
            </PaymentsHeader>
            <PaymentsBody>
               <PaymentForm/>
            </PaymentsBody>
        </PaymentsContainer>
    );
};

export default CardPayments;