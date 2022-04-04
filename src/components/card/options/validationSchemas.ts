import valid from "card-validator";
import * as yup from 'yup'


export const yupSchema = yup.object({
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
