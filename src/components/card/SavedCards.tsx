import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import VisaLogo from '../../assets/VisaLogo'
import {useActions} from "../../hooks/useActions";

const SavedCards = () => {

    const cards = useTypedSelector(state=>state.card.cards)

    const {SetPreselectedCard} = useActions()




    const renderCards = () =>{
        return cards.map((card)=>{
            console.log(card.cardId)
         return  <div key={card.cardId}
                      className={'payments-card-saved-container'}
                      onClick={()=>{
                          SetPreselectedCard(card.cardId);
                      }}

         >
                     <div>{card.cardNumber}</div>
                    <div className={'payments-card-saved-row'}>
                        <VisaLogo/>
                        <span>
                         {card.cardMonth} / {card.cardYear.slice(2)}
                        </span>
                    </div>
            </div>
        })
    }

    return (
        <div className={'payments-card-saved'}>
            {renderCards()}
        </div>
    );
};

export default SavedCards;