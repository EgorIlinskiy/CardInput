import {LanguageAction, LanguageActionTypes, LanguageTypes} from "../../types/languageTypes";

const initialState:LanguageTypes = {
    language: "ENGLISH"
}

export const translationReducers = (state = initialState, action: LanguageAction):LanguageTypes => {
    switch (action.type) {
        case LanguageActionTypes.SET_ENGLISH:
            return {...state, language:"ENGLISH" }
        case LanguageActionTypes.SET_RUSSIAN:
            return {...state, language:"RUSSIAN" }
        default:
            return state
    }
}
