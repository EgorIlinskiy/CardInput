import {ChangeEvent, ChangeEventHandler} from "react";
import {ActionMeta, MultiValue, SingleValue} from "react-select";

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