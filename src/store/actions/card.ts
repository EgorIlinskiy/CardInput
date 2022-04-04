import {CardActionTypes, CardTypesActions} from "../../types/cardTypes";


export function setCardType(type: string | undefined):CardTypesActions{
    return {
        type: CardActionTypes.SET_TYPE,
        payload: type
    }
}