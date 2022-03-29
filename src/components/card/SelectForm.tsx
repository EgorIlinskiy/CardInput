import React from 'react'
import Select, {StylesConfig} from 'react-select'
import {ISelectInput} from "../../types/cardTypes";



function SelectForm( {handleChange, options,errors,onBlur,id,name,touched,placeholder}:ISelectInput) {
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

         return  <div className={'payments-card-expiration-select'}>
           <Select
               options={options}
               onChange={handleChange}
               id={id}
               name={name}
               onBlur={onBlur}
               placeholder={placeholder}
               styles={customStyles}

           />
       </div>
}



export default SelectForm
