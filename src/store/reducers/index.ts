import {combineReducers} from "redux";
import {translationReducers} from './translationReducers'

export const rootReducer = combineReducers({
    translation: translationReducers
})
export type RootState = ReturnType<typeof rootReducer>
