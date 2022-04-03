import {combineReducers} from "redux";
import {translationReducers} from './translationReducers'
import {cardReducers} from './cardReducers'

export const rootReducer = combineReducers({
    translation: translationReducers,
    card: cardReducers
})

export type RootState = ReturnType<typeof rootReducer>
