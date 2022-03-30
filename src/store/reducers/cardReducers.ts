import {CardActions, CardActionTypes, CardStateType} from "../../types/cardTypes";
import _ from "lodash";

const initialState:CardStateType = {
    cards:[
        {   cardId:1,
            cardNumber: "41111111111111",
            cardMonth: "10",
            cardYear: "2026",
            cardCVV: "123"
        }
    ],
    payMode: true,
    preSelectedId: 0

}

export const cardReducers = (state = initialState, action: CardActions):CardStateType => {
    switch (action.type) {
        case CardActionTypes.ADD_CARD:
            let newCards = state.cards;
            let duplicate = state.cards.every((card)=>{
                return !_.isEqual({
                    cardCVV: card.cardCVV,
                    cardNumber: card.cardNumber,
                    cardMonth: card.cardMonth,
                    cardYear:card.cardYear
                },{
                    cardCVV: action.payload.cardCVV,
                    cardNumber: action.payload.cardNumber,
                    cardMonth: action.payload.cardMonth,
                    cardYear: action.payload.cardMonth
                })
            })
            if(duplicate)
            newCards.push({
                cardId: Date.now(),
                cardCVV: action.payload.cardCVV,
                cardNumber: action.payload.cardNumber,
                cardMonth: action.payload.cardMonth,
                cardYear: action.payload.cardMonth
            })
            console.log(newCards)
            return {...state, cards:newCards}

        case CardActionTypes.SWITCH_VIEW:
            return {...state, payMode: !state.payMode}

        case CardActionTypes.SET_PRESELECTED:
            return {...state,payMode:!state.payMode, preSelectedId: action.payload}

        default:
            return state
    }

}


