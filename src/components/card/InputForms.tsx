import React from 'react';
import {useFormik, FormikProps} from "formik";
import * as yup from 'yup'
import valid from 'card-validator'
import './card.scss'
import CustomInput from "./CustomInput";
import SelectForm from "./SelectForm";
import {monthOptions, yearOptions} from "./options/optionsForSelect";
import {IFormValues} from "../../types/cardTypes";


const InputForms = () => {
    const {values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue}:FormikProps<IFormValues> = useFormik({
        initialValues:{
            cardNumber:'',
            cardCVV:'',
            cardYear: '',
            cardMonth:''
        },

        onSubmit:(values)=>{
            console.log(values)
        },

        validationSchema:yup.object({
            cardNumber:yup.string()
                .typeError('Card number must contains only numbers!')
                .required('Required!')
                .test('card-number', 'Credit card number is invalid',value => valid.number(value).isValid),
            cardCVV: yup.string()
                .required('Required!')
                .test('cvv-number','CVV code is invalid', value => valid.cvv(value).isValid)
                .length(3,'Invalid cvv'),
            cardYear: yup.number()
                .required('Required!'),
                //.test('card-year','Invalid year', value => valid.expirationYear(value).isValid),
            cardMonth: yup.number()
                .required('Required!')
                //.test('card-month','Invalid month', value => valid.expirationMonth(value).isValid)

        })
    })



    return (
        <div className='card-container'>
            <form onSubmit={handleSubmit}>
                <CustomInput name={'cardNumber'}
                             touched={touched.cardNumber}
                             handleChange={handleChange}
                             placeholder={'4585 -'}
                             errors={errors.cardNumber}
                             value={values.cardNumber}
                             label={'Credit card number'}
                />
                <CustomInput name={'cardCVV'}
                             touched={touched.cardCVV}
                             handleChange={handleChange}
                             placeholder={''}
                             errors={errors.cardCVV}
                             value={values.cardCVV}
                             label={'CVV'}
                />
                <div className={'card-expiration'}>
                    <SelectForm
                        id={"cardMonth"}
                        name={'cardMonth'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardMonth", option.label)
                        }}
                        options={monthOptions}
                        onBlur={handleBlur}
                        errors = {errors.cardYear}
                        touched={touched.cardYear}
                        placeholder = {'Month'}
                    />

                    <SelectForm
                        id={"cardYear"}
                        name={'cardYear'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardYear", option.label)
                        }}
                        options={yearOptions}
                        onBlur={handleBlur}
                        errors = {errors.cardYear}
                        touched={touched.cardYear}
                        placeholder = {'Year'}

                    />

                </div>
                <button type='submit' className='card-submit'>Submit</button>
            </form>
        </div>
    );
};

export default InputForms;