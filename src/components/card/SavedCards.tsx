import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {cardsSelector} from "../../store/selectors/cardSelectors";
import {
    LogoCardContainer,
    PaymentsCardsSaved,
    PaymentsCardsSavedContainer,
    PaymentsCardsSavedRow,

} from './CardStyledComponents'
import VisaLogo from "../../assets/VisaLogo";
import MasterCardLogo from "../../assets/MasterCardLogo";
import valid from "card-validator";

const SavedCards = () => {

    const cards = useTypedSelector(cardsSelector)

    const {setPreselectedCard} = useActions()

    const renderCards = () =>{
        return cards.map((card)=>{
         return  <PaymentsCardsSavedContainer key={card.cardId}
                      onClick={()=>{
                          setPreselectedCard(card.cardId);
                      }}
                >
                <div>{card.cardNumber}</div>
                    <PaymentsCardsSavedRow>
                        <LogoCardContainer>
                            {valid.number(card.cardNumber).card?.niceType === 'Visa' ?
                                <VisaLogo/> : <MasterCardLogo/>}
                        </LogoCardContainer>
                        <span>
                             {card.cardMonth} / {card.cardYear.slice(2)}
                        </span>
                    </PaymentsCardsSavedRow>
            </PaymentsCardsSavedContainer>
        })
    }

    return (
        <PaymentsCardsSaved>
            {renderCards()}
        </PaymentsCardsSaved>
    );
};

export default SavedCards;