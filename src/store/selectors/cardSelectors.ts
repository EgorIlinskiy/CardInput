import {RootState} from "../reducers";

export function CardsSelector(state:RootState){
    return state.card.cards
}

export function ModeSelector(state:RootState){
    return state.card.payMode
}

export function preSelectedIdSelector(state:RootState){
    return state.card.preSelectedId
}

export function selectCardType(state:RootState){
    return state.card.cardType
}