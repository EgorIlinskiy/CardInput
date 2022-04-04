import React from 'react';
import PaymentForm from "./PaymentForm";
import {PaymentsContainer, PaymentsHeader, PaymentsHeaderMain, PaymentsHeaderSecondary, PaymentsHeaderSecondaryText,
PaymentsBody} from './CardStyledComponents'
import {FormattedMessage} from "react-intl";
import CardLogoSwitcher from "./CardLogoSwitcher";
import VisaLogo from "../../assets/VisaLogo";
import SavedCards from "./SavedCards";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ModeSelector} from "../../store/selectors/cardSelectors";

const CardPayments = () => {


const CardPayments = () => {

    const payMode = useTypedSelector(ModeSelector)

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
                {payMode  ?    <PaymentForm/> : <SavedCards/>}
            </PaymentsBody>
        </PaymentsContainer>
    );
};

export default CardPayments;