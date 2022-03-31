import {LanguageAction, LanguageActionTypes} from "../../types/languageTypes";

export function SetEnglishLang():LanguageAction{
    return {type: LanguageActionTypes.SET_ENGLISH}

}

export function SetRussianLang():LanguageAction{
    return {type: LanguageActionTypes.SET_RUSSIAN}

}