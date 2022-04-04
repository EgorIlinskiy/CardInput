import React from 'react';
import PaymentForm from "./PaymentForm";
import {
    PaymentsContainer,
    PaymentsHeader,
    PaymentsHeaderMain,
    PaymentsHeaderSecondary,
    PaymentsHeaderSecondaryText,
    PaymentsBody
} from './CardStyledComponents'
import {FormattedMessage} from "react-intl";
import CardLogoSwitcher from "./CardLogoSwitcher";
import SavedCards from "./SavedCards";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {modeSelector} from "../../store/selectors/cardSelectors";

const CardPayments = () => {

    const payMode = useTypedSelector(modeSelector)

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
                {payMode  ?    <PaymentForm/> : <SavedCards/>}
            </PaymentsBody>
        </PaymentsContainer>
    );
};

export default CardPayments;