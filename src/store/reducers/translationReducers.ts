import {LanguageAction, LanguageActionTypes, LanguageTypes} from "../../types/languageTypes";

const initialState:LanguageTypes = {
    language: "English"
}

export const translationReducers = (state = initialState, action: LanguageAction):LanguageTypes => {
    switch (action.type) {
        case LanguageActionTypes.SET_LANGUAGE:
            return {...state, language:action.payload }

        default:
            return state
    }
}
