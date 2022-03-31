export interface LanguageTypes{
    language:string;
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

export type LanguageAction = SetEngAction | SetRuAction

