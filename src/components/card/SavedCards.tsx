import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {cardsSelector} from "../../store/selectors/cardSelectors";
import {
    PaymentsCardsSaved,
    PaymentsCardsSavedContainer,
    PaymentsCardsSavedRow
} from './CardStyledComponents'

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