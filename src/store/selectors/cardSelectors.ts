import {RootState} from "../reducers";

export function cardsSelector(state:RootState){
    return state.card.cards
}

export function modeSelector(state:RootState){
    return state.card.payMode
}

export function preSelectedIdSelector(state:RootState){
    return state.card.preSelectedId
}

export function selectCardType(state:RootState){
    return state.card.cardType
}