import {CardActions, CardActionTypes, CardStateType} from "../../types/cardTypes";

const initialState:CardStateType = {
    cards:[
        {   cardId:1,
            cardNumber: "41111111111111",
            cardMonth: "10",
            cardYear: "2026",
            cardCVV: "123"
        }
    ]

}

export const cardReducers = (state = initialState, action: CardActions):CardStateType => {
    switch (action.type) {
        case CardActionTypes.ADD_CARD:
            let newCards = state.cards;
            newCards.push({
                cardId: Date.now(),
                cardCVV: action.payload.cardCVV,
                cardNumber: action.payload.cardNumber,
                cardMonth: action.payload.cardMonth,
                cardYear: action.payload.cardMonth
            })
            console.log(newCards)
            return {...state, cards:newCards}

        default:
            return state
    }

}


