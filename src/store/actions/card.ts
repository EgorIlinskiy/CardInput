import {CardActions, CardActionTypes, IFormValues} from "../../types/cardTypes";

export function AddNewCard(data:IFormValues):CardActions{

    return {
        type:CardActionTypes.ADD_CARD,
        payload: data
    }

}