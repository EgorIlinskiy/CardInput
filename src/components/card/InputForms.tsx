import React from 'react';
import {useFormik, FormikProps, FormikHelpers} from "formik";
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
        setFieldValue,
    isValid
    }:FormikProps<IFormValues> = useFormik({
        initialValues:{
            cardNumber:'',
            cardCVV:'',
            cardYear: '',
            cardMonth:''
        },

        onSubmit:(values) => {
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
            cardYear: yup.string()
                .required('Required!')
                .test('card-year','Invalid year', value => valid.expirationYear(value).isValid),
            cardMonth: yup.string()
                .required('Required!')
                .test('card-month','Credit card expire', (value,ctx) => {
                    let date = new Date()
                    let currentYear  = date.getFullYear()
                    let currentMonth  = date.getMonth()
                    if(value === undefined) return  false
                    if(ctx.parent.cardYear == currentYear && parseInt(value) >= currentMonth+1) {
                        return  true
                    }
                    return ctx.parent.cardYear > currentYear;
                })

        })
    })
    return ( <form onSubmit={handleSubmit}>
                <CustomInput name={'cardNumber'}
                             touched={touched.cardNumber}
                             handleChange={handleChange}
                             placeholder={'4585 -'}
                             errors={errors.cardNumber}
                             value={values.cardNumber}
                             label={'Credit card number'}
                />

                <div className={'payments-card-expiration'}>
                    <div className={`payments-card-expiration-text ${touched.cardMonth && touched.cardYear && errors.cardMonth && errors.cardYear ? 'payments-card-input-text-error' :''}`
                    }>Expiration</div>
                    <SelectForm
                        id={"cardMonth"}
                        name={'cardMonth'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardMonth", option.label.toString())
                        }}
                        options={monthOptions}
                        onBlur={handleBlur}
                        errors = {errors.cardMonth}
                        touched={touched.cardMonth}
                        placeholder = {'Month'}
                    />
                    <SelectForm
                        id={"cardYear"}
                        name={'cardYear'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardYear", option.label.toString())
                        }}
                        options={yearOptions}
                        onBlur={handleBlur}
                        errors = {errors.cardYear}
                        touched={touched.cardYear}
                        placeholder = {'Year'}

                    />
                </div>
                <div className={'payments-card-input-cvv'}>
                    <CustomInput name={'cardCVV'}
                                 touched={touched.cardCVV}
                                 handleChange={handleChange}
                                 placeholder={''}
                                 errors={errors.cardCVV}
                                 value={values.cardCVV}
                                 label={'CVV / CVC'}
                                 width={'auto'}
                    />
                    <span className={'payments-card-input-cvv-text'}>3 or 4 digits code</span>
                </div>
                <button type='submit' className='payments-card-submit' disabled={!isValid}>Pay now</button>
            </form>
    );
};

export default InputForms;