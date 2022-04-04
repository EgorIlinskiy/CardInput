import React, {useEffect, useState} from 'react';
import {useFormik, FormikProps, useFormikContext} from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import {monthOptions, yearOptions} from "./options/optionsForSelect";
import {IFormValues} from "../../types/cardTypes";
import {
    PaymentsCardExpiration,
    PaymentsCardExpirationText,
    PaymentsCardCvvContainer,
    PaymentsInputCVVText,
    PaymentsCardSubmit,
} from './CardStyledComponents'
import {FormattedMessage} from "react-intl";
import {yupSchema} from "./options/validationSchemas";
import valid from "card-validator";
import {useActions} from "../../hooks/useActions";

const PaymentForm = () => {

    const initialValues:IFormValues = {
        cardNumber: '',
        cardCVV: '',
        cardYear:'',
        cardMonth: ''
    }

    let {setCardType} = useActions()

    useEffect(()=>{
        let type = valid.number(values.cardNumber).card?.niceType
        setCardType(type)
    }, )



    const {
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue
    }:FormikProps<IFormValues> = useFormik({
            initialValues,

            onSubmit: (values) => {
                console.log(values)
                console.log(valid.number(values.cardNumber))
            },

            validationSchema: yupSchema
        })

    return ( <form onSubmit={handleSubmit}>
                <CustomInput name={'cardNumber'}
                             touched={touched.cardNumber}
                             handleChange={handleChange}
                             placeholder={'4585 -'}
                             errors={errors.cardNumber}
                             value={values.cardNumber}
                             label={<FormattedMessage
                                    id={"app.card.body.creditCardNumber"}
                                    defaultMessage={'Credit card number'}
                             />}
                />
                <PaymentsCardExpiration>
                    <PaymentsCardExpirationText error={
                    touched.cardMonth && touched.cardYear &&
                    errors.cardMonth && errors.cardYear ? 'error' :''}
                    >
                        <FormattedMessage
                            id={"app.card.body.creditCardExpiration.main"}
                            defaultMessage={"Expiration"}
                        />
                    </PaymentsCardExpirationText>
                    <CustomSelect
                        id={"cardMonth"}
                        name={'cardMonth'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardMonth", option.label.toString())
                        }}
                        options={monthOptions}
                        onBlur={handleBlur}
                        defaultValue = {values.cardMonth}
                        errors = {errors.cardMonth}
                        touched={touched.cardMonth}
                        placeholder = {<FormattedMessage
                            id={"app.card.body.creditCardExpiration.month"}
                            defaultMessage={'Month'}
                            />}
                    />
                    <CustomSelect
                        id={"cardYear"}
                        name={'cardYear'}
                        handleChange={(option:any):any=> {
                            setFieldValue("cardYear", option.label.toString())
                        }}
                        options={yearOptions}
                        onBlur={handleBlur}
                        defaultValue = {values.cardYear}
                        errors = {errors.cardYear}
                        touched={touched.cardYear}
                        placeholder = {<FormattedMessage
                            id={"app.card.body.creditCardExpiration.year"}
                            defaultMessage={'Year'}
                        />}
                    />
                </PaymentsCardExpiration>
                <PaymentsCardCvvContainer>
                    <CustomInput name={'cardCVV'}
                                 touched={touched.cardCVV}
                                 handleChange={handleChange}
                                 placeholder={''}
                                 errors={errors.cardCVV}
                                 value={values.cardCVV}
                                 label={<FormattedMessage
                                     id={"app.card.body.creditCardCvv.main"}
                                     defaultMessage={'CVV / CVC'}
                                 />}
                                 width={'auto'}
                    />
                    <PaymentsInputCVVText>
                        <FormattedMessage
                            id={"app.card.body.creditCardCvv.sub"}
                            defaultMessage={'3 or 4 digits code'}
                        />
                    </PaymentsInputCVVText>
                </PaymentsCardCvvContainer>
                <PaymentsCardSubmit type='submit'>
                    <FormattedMessage
                    id={"app.card.body.submitButton.main"}
                    defaultMessage={'Pay now'}
                />
                </PaymentsCardSubmit>
            </form>
    );
};

export default PaymentForm;