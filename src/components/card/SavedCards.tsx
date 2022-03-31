import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import VisaLogo from '../../assets/VisaLogo'
import {useActions} from "../../hooks/useActions";
import {CardsSelector} from "../../store/selectors/cardSelectors";
import {PaymentsCardsSaved, PaymentsCardsSavedContainer, PaymentsCardsSavedRow} from './CardStyledComponents'

const SavedCards = () => {

    const cards = useTypedSelector(CardsSelector)

    const {SetPreselectedCard} = useActions()

    const renderCards = () =>{
        return cards.map((card)=>{
         return  <PaymentsCardsSavedContainer key={card.cardId}
                      onClick={()=>{
                          SetPreselectedCard(card.cardId);
                      }}
                >
                <div>{card.cardNumber}</div>
                    <PaymentsCardsSavedRow>
                        <VisaLogo/>
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