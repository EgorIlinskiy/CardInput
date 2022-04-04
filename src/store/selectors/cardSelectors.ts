import {RootState} from "../reducers";

export function selectCardType(state:RootState){
    return state.card.cardType
}