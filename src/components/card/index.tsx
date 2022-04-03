import React from 'react';
import PaymentForm from "./PaymentForm";
import {PaymentsContainer, PaymentsHeader, PaymentsHeaderMain, PaymentsHeaderSecondary, PaymentsHeaderSecondaryText,
PaymentsBody} from './CardStyledComponents'
import {FormattedMessage} from "react-intl";
import CardLogoSwitcher from "./CardLogoSwitcher";

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
                   <CardLogoSwitcher/>
               </PaymentsHeaderSecondary>
            </PaymentsHeader>
            <PaymentsBody>
               <PaymentForm/>
            </PaymentsBody>
        </PaymentsContainer>
    );
};

export default CardPayments;