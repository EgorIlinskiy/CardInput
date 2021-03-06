import {CardActions,CardTypesActions, CardActionTypes, IFormValues} from "../../types/cardTypes";

export function addNewCard(data:IFormValues):CardActions{
    return {
        type:CardActionTypes.ADD_CARD,
        payload: data
    }
}

export function switchMode():CardActions{
    return {
        type: CardActionTypes.SWITCH_VIEW
    }
}

export function setPreselectedCard(id:number):CardActions{
    return {
        type: CardActionTypes.SET_PRESELECTED,
        payload: id
    }
}

export function setCardType(type: string | undefined):CardTypesActions{
    return {
        type: CardActionTypes.SET_TYPE,
        payload: type
    }
}