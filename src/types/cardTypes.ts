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
    defaultValue: string;
}


export interface IFormValues{
    cardNumber:string;
    cardCVV:string;
    cardYear:string;
    cardMonth:string;
    saveCard:any;
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
    payMode: boolean,
    preSelectedId: number

}


export enum CardActionTypes {
   ADD_CARD= 'ADD_CARD',
    SWITCH_VIEW = 'SWITCH_VIEW',
   SET_PRESELECTED = 'SET_PRESELECTED'
}
interface AddNewCard {
    type: CardActionTypes.ADD_CARD,
    payload: IFormValues
}
interface SwitchView{
    type: CardActionTypes.SWITCH_VIEW
}

interface SetPreselectedCard{
    type: CardActionTypes.SET_PRESELECTED,
    payload: number
}


export type CardActions = AddNewCard | SwitchView | SetPreselectedCard

