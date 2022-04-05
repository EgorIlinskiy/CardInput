import {CardActions, CardActionTypes, CardStateType} from "../../types/cardTypes";
import _ from "lodash";

const initialState:CardStateType = {
    cards:[
        {   cardId:5,
            cardNumber: "4111111111111111",
            cardMonth: "10",
            cardYear: "2026",
            cardCVV: "123"
        },
        {
            cardId:10,
            cardNumber: "5425233430109903",
            cardMonth: "03",
            cardYear: "2022",
            cardCVV: "773"
        }
    ],
    payMode: true,
    preSelectedId: 0,
    cardType:"Visa"
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
                cardYear: action.payload.cardYear
            })
            return {...state, cards:newCards}

        case CardActionTypes.SWITCH_VIEW:
            return {...state, payMode: !state.payMode}

        case CardActionTypes.SET_PRESELECTED:
            return {...state, payMode:!state.payMode, preSelectedId: action.payload}

        case CardActionTypes.SET_TYPE:
            return {...state, cardType: action.payload}

        default:
            return state
    }

}
