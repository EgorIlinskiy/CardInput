import React from 'react';
import {useFormik, FormikProps} from "formik";
import * as yup from 'yup'
import valid from 'card-validator'
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import {monthOptions, yearOptions} from "./options/optionsForSelect";
import {IFormValues} from "../../types/cardTypes";
import {useActions} from "../../hooks/useActions";
import {SwitchMode} from "../../store/actions/card";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {CardsSelector, preSelectedIdSelector} from "../../store/selectors/cardSelectors";
import {
    PaymentsCardExpiration,
    PaymentsCardExpirationText,
    PaymentsCardCvvContainer,
    PaymentsInputCVVText,
    PaymentsCardLine,
    PaymentsSettingLabel,
    PaymentsSettings,
    PaymentsSettingsSelect,
    PaymentsCardSubmit,
} from './CardStyledComponents'


const PaymentForm = () => {

    const {AddNewCard, SwitchMode} = useActions()
   const preSelected = useTypedSelector(preSelectedIdSelector)
    const cardData = useTypedSelector(CardsSelector).filter(card=>{
        return card.cardId === preSelected
    })[0]


    const initialValues:IFormValues = {
        cardNumber: cardData !== undefined ? cardData.cardNumber : '',
        cardCVV:cardData !== undefined ? cardData.cardCVV : '',
        cardYear: cardData !== undefined ? cardData.cardYear : '',
        cardMonth:cardData !== undefined ? cardData.cardMonth : '',
        saveCard: false
    }


    const {values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue
    }:FormikProps<IFormValues> = useFormik({
        initialValues:initialValues,

        onSubmit:(values) => {
            console.log(values)
            if(values.saveCard) AddNewCard(values)
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

                <PaymentsCardExpiration>
                    <PaymentsCardExpirationText error={
                    touched.cardMonth && touched.cardYear &&
                    errors.cardMonth && errors.cardYear ? 'error' :''}
                    >
                        Expiration
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
                        placeholder = {'Month'}
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
                        placeholder = {'Year'}
                    />
                </PaymentsCardExpiration>
                <PaymentsCardCvvContainer>
                    <CustomInput name={'cardCVV'}
                                 touched={touched.cardCVV}
                                 handleChange={handleChange}
                                 placeholder={''}
                                 errors={errors.cardCVV}
                                 value={values.cardCVV}
                                 label={'CVV / CVC'}
                                 width={'auto'}
                    />
                    <PaymentsInputCVVText>
                        3 or 4 digits code
                    </PaymentsInputCVVText>
                </PaymentsCardCvvContainer>
                <PaymentsCardSubmit type='submit'>
                    Pay now
                </PaymentsCardSubmit>
            <PaymentsCardLine/>
            <PaymentsSettings>
                <PaymentsSettingsSelect
                    onClick={()=>{SwitchMode()}}
                >
                    Choose card from the saved
                </PaymentsSettingsSelect>
               <PaymentsSettingLabel>
                   <input type={'checkbox'}
                          name={'saveCard'}
                          checked={values.saveCard}
                          onChange={handleChange}
                   />
                       Save card
               </PaymentsSettingLabel>

           </PaymentsSettings>
            </form>
    );
};

export default PaymentForm;