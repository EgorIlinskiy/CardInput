import {ChangeEventHandler, ReactElement} from "react";

export interface ICustomInput{
    label:ReactElement;
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
    placeholder?:ReactElement;
    defaultValue: string;
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
    payMode: boolean,
    preSelectedId: number

}

