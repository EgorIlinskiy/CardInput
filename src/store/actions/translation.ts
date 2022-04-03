import {LanguageAction, LanguageActionTypes} from "../../types/languageTypes";

export function setEnglishLang():LanguageAction{
    return {type: LanguageActionTypes.SET_ENGLISH}
}

export function setRussianLang():LanguageAction{
    return {type: LanguageActionTypes.SET_RUSSIAN}
}