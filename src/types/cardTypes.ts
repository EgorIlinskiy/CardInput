import {ChangeEventHandler} from "react";

export interface ICustomInput{
    label:string;
    errors?:string;
    handleChange:ChangeEventHandler<HTMLInputElement>;
    name:string;
    placeholder:string;
    touched?:boolean;
    value:string;
}

export interface ISelectInput{
    value: string;
    id:string;
    handleChange:ChangeEventHandler<HTMLInputElement>;
    options: Object[];
}


export interface IFormValues{
    cardNumber:string;
    cardCVV:string;
    cardYear:string;
    cardMonth:string;
}