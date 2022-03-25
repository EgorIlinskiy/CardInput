import React, {FC, useState} from 'react';
import {InputCardProps} from "../../types/cardTypes";
import './input.scss'

const InputCard:FC<InputCardProps> = ({isHidden,placeholder,label,maxSize}) => {
    const [value,setValue] = useState('');

   function inputHandler(e:React.ChangeEvent<HTMLInputElement>){
       let cardNumber = e.target.value.replace(/ /g,'')
       console.log(cardNumber)
       if(cardNumber.match(/^\d+$/) !== null
           || e.target.value.length === 0){
           let formatedNumber = cardNumber.split('').reduce((acc,curr,index)=>{
              if([4,8,12].includes(index)){
                  acc+= ' ' + curr
              } else acc += curr
               return acc
           },'')

           setValue(formatedNumber);
       }

    }

    return (
        <div className='input-container'>
            <span className='input-label'>
                {label}
            </span>
            <input className='input-input'
                   type={isHidden ? 'password': 'text'}
                   placeholder={placeholder}
                   value={value}
                   onChange={inputHandler}
                   maxLength={maxSize+3}
            />
        </div>
    );
};

export default InputCard;