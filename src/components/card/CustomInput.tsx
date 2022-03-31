import React from 'react';
import {ICustomInput} from "../../types/cardTypes";
import {PayementsInputContainer, PaymentsCardInputText, PaymentsCardInput} from './CardStyledComponents'


const CustomInput = ({label,errors, handleChange, name,placeholder, touched,value,width}:ICustomInput) => {

    return (

            <PayementsInputContainer>
                <PaymentsCardInputText error={errors && touched ? 'error' : ''}>{label}</PaymentsCardInputText>
                <PaymentsCardInput type="text"
                       onChange={handleChange}
                       name={name}
                       placeholder={placeholder}
                       error={errors && touched ? 'payments-card-input-error': ''}
                       style={{width}}
                       value = {value}
                       autoComplete={'on'}
                />
            </PayementsInputContainer>
    );
};

export default CustomInput;