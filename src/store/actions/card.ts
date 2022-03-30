import {CardActions, CardActionTypes, IFormValues} from "../../types/cardTypes";

export function AddNewCard(data:IFormValues):CardActions{

    return {
        type:CardActionTypes.ADD_CARD,
        payload: data
    }
}

export function SwitchMode():CardActions{
    return {
        type: CardActionTypes.SWITCH_VIEW
    }
}

export function SetPreselectedCard(id:number):CardActions{
    console.log('action ', id)
    return {
        type: CardActionTypes.SET_PRESELECTED,
        payload: id
    }
}