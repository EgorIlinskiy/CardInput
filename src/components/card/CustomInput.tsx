import React from 'react';
import {ICustomInput} from "../../types/cardTypes";

const CustomInput = ({label,errors, handleChange, name,placeholder, touched,value}:ICustomInput) => {

    return (
            <div className={'inputs-container'}>
                <span className='card-input-text'>{label}</span>
                <input type="text"
                       onChange={handleChange}
                       name={name}
                       placeholder={placeholder}
                       className='card-input'
                       value = {value}
                />
                {errors && touched && <div className='card-error'>{errors}</div>}
            </div>
    );
};

export default CustomInput;