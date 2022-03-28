import React from 'react';
import {useFormik, FormikProps } from "formik";
import * as yup from 'yup'
import './card.scss'

interface CardValues{
    cardNumber:string;
    cvvNumber:string;
}

const InputForms = () => {

    const {values,
        handleSubmit,
        handleChange,
        errors,
        touched}:FormikProps<CardValues> = useFormik({
        initialValues:{
            cardNumber:'',
            cvvNumber:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema:yup.object({
            cardNumber:yup.string()
                .typeError('Card number must contains only numbers!')
                .required('Required!')
                .matches(/(^\d+$)/,'Must contains only numbers!')
                .length(16,'Invalid card number'),
            cvvNumber: yup.string()
                .required()
                .matches(/(^\d+$)/,'Must contains only numbers!')
                .length(3,'Invalid cvv')
        })
    })


    return (
        <div className='card-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cardNumber">Credit card number</label>
                    <input type="text"
                           onChange={handleChange}
                           name={'cardNumber'}
                           placeholder={'4585 -'}
                           className='card-input'
                    />
                    {errors.cardNumber && touched.cardNumber && <div className='card-error'>{errors.cardNumber}</div>}
                </div>
               <div>
                   <label htmlFor="cvvNumber">CVV</label>
                   <input type="text"
                          onChange={handleChange}
                          name={'cvvNumber'}
                          placeholder={''}
                          className='card-input'
                   />
                   {errors.cvvNumber && touched.cvvNumber && <div className='card-error'>{errors.cvvNumber}</div>}

               </div>
                <button type='submit' className='card-submit'>Submit</button>
            </form>
        </div>
    );
};

export default InputForms;