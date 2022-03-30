import {counterReducers} from "./counterReducers";
import {combineReducers} from "redux";
import {cardReducers} from "./cardReducers";


export const rootReducer = combineReducers({
    counter: counterReducers,
    card: cardReducers
})
export type RootState = ReturnType<typeof rootReducer>
