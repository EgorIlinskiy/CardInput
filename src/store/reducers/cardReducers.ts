import {CardActionTypes, CardTypesActions, ICardLogoState} from "../../types/cardTypes";

const initialState:ICardLogoState = {
    cardType:"Visa"
}

export const cardReducers = (state = initialState, action: CardTypesActions ):ICardLogoState => {
    switch (action.type) {
        case CardActionTypes.SET_TYPE:
            return {...state, cardType: action.payload}
        default:
            return state
    }
}