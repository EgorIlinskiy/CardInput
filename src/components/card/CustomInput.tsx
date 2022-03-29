import React from 'react';
import {ICustomInput} from "../../types/cardTypes";

const CustomInput = ({label,errors, handleChange, name,placeholder, touched,value,width}:ICustomInput) => {

    return (
            <div className={'payments-inputs-container'}>
                <span className={`payments-card-input-text ${errors && touched ? 'payments-card-input-text-error' :''}`}>{label}</span>
                <input type="text"
                       onChange={handleChange}
                       name={name}
                       placeholder={placeholder}
                       className={`payments-card-input ${errors && touched ? 'payments-card-input-error': ''}`}
                       style={{width}}
                       value = {value}
                       autoComplete={'off'}
                />
            </div>
    );
};

export default CustomInput;