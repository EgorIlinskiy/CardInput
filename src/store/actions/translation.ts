import {LanguageAction, LanguageActionTypes, LanguageString} from "../../types/languageTypes";

export function setLanguage(lang:LanguageString):LanguageAction{
    return {
        type: LanguageActionTypes.SET_LANGUAGE,
        payload:lang
    }
}

export function SetEnglishLang():LanguageAction{
    return {
        type: LanguageActionTypes.SET_ENGLISH
    }
}

export function SetRussianLang():LanguageAction{
    return {
        type: LanguageActionTypes.SET_RUSSIAN
    }

}