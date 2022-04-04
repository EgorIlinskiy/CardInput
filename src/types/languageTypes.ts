export interface LanguageTypes{
    language:LanguageString;
}

export enum LanguageActionTypes {
    SET_LANGUAGE = 'SET_LANGUAGE'
}

export type LanguageString = keyof ILanguages;


interface setLanguage{
    type:LanguageActionTypes.SET_LANGUAGE,
    payload:keyof ILanguages;
}

interface ILanguageFields{
    "app.card.header.main": string;
    "app.card.header.sub": string;
    "app.card.body.creditCardNumber": string;
    "app.card.body.creditCardExpiration.main": string;
    "app.card.body.creditCardExpiration.month": string;
    "app.card.body.creditCardExpiration.year": string;
    "app.card.body.creditCardCvv.main": string;
    "app.card.body.creditCardCvv.sub": string;
    "app.card.body.submitButton.main": string;
    "app.card.footer.chooseCards": string;
    "app.card.footer.saveCard": string;
}
export interface ILanguages{
    Russian:ILanguageFields,
    English: ILanguageFields
}

export enum LanguageActionTypes {
    SET_ENGLISH = 'SET_ENGLISH',
    SET_RUSSIAN = 'SET_RUSSIAN'
}
interface SetEngAction {
    type: LanguageActionTypes.SET_ENGLISH
}
interface SetRuAction {
    type: LanguageActionTypes.SET_RUSSIAN
}

export type LanguageAction = setLanguage |SetEngAction | SetRuAction

