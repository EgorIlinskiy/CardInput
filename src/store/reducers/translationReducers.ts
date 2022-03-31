import {LanguageAction, LanguageActionTypes, LanguageTypes} from "../../types/languageTypes";

const initialState:LanguageTypes = {
    language: "English"
}

export const translationReducers = (state = initialState, action: LanguageAction):LanguageTypes => {
    switch (action.type) {
        case LanguageActionTypes.SET_ENGLISH:
            return {...state, language:"English" }
        case LanguageActionTypes.SET_RUSSIAN:
            return {...state, language:"Russian" }
        default:
            return state
    }
}
