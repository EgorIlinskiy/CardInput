import React from 'react'
import {StylesConfig} from 'react-select'
import {ISelectInput} from "../../types/cardTypes";
import {PaymentsCardExpirationSelect, StyledReactSelect} from './CardStyledComponents'


function CustomSelect({handleChange, options,errors,onBlur,id,name,touched,placeholder, defaultValue}:ISelectInput) {
    const customStyles: StylesConfig<any> = {
        control: (provided) => {
            return {
                ...provided,
                borderColor:errors && touched  ? 'red': 'rgb(137, 137, 137,0.5)'
            };
        },
        option: (provided)=>({
            ...provided
        }),
        singleValue:(provided)=>({
            ...provided
        })
    };

         return  <PaymentsCardExpirationSelect>
                   <StyledReactSelect
                       options={options}
                       onChange={handleChange}
                       id={id}
                       name={name}
                       onBlur={onBlur}
                       error = {errors}
                       touched = {touched}
                       placeholder={defaultValue === '' ? placeholder : defaultValue}
                       styles={customStyles}
                   />
                </PaymentsCardExpirationSelect>
}

export default CustomSelect
