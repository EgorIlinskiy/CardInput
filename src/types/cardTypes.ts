import  {ChangeEventHandler} from "react";

export interface ICustomInput{
    label:string;
    errors?:string;
    handleChange:ChangeEventHandler<HTMLInputElement>;
    name:string;
    placeholder:string;
    touched?:boolean;
    value:string;
    width?:string;
}

export interface ISelectInput{
    id:string;
    handleChange:any;
    options:any;
    onBlur: any;
    errors?:string;
    name:string;
    touched?:boolean;
    placeholder?:string;
}


export interface IFormValues{
    cardNumber:string;
    cardCVV:string;
    cardYear:string;
    cardMonth:string;
}

interface CardData{
    cardId: number,
    cardNumber: string,
    cardMonth: string,
    cardYear: string,
    cardCVV: string
}

export interface CardStateType{
    cards: CardData[]
}


export enum CardActionTypes {
   ADD_CARD= 'ADD_CARD'
}
interface AddNewCard {
    type: CardActionTypes.ADD_CARD,
    payload: IFormValues
}

export type CardActions = AddNewCard

