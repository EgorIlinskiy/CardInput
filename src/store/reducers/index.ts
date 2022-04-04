import {combineReducers} from "redux";
import {cardReducers} from "./cardReducers";
import {translationReducers} from './translationReducers'

export const rootReducer = combineReducers({
    card: cardReducers,
    translation: translationReducers
})
export type RootState = ReturnType<typeof rootReducer>
