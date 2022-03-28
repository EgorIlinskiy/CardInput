import React from 'react'
import Select from 'react-select'
import {ISelectInput} from "../../types/cardTypes";

 function SelectForm({ value, handleChange, options,errors,onBlur,id,name,touched,placeholder}:any) {

       return  <div>
           <Select
               value={value}
               options={options}
               onChange={handleChange}
               id={id}
               name={name}
               onBlur={onBlur}
               placeholder={placeholder}
           />

           {errors && touched && <div className='card-error'>{errors}</div>}
       </div>
}



export default SelectForm
