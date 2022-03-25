import {counterReducers} from "./counterReducers";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    counter: counterReducers
})
export type RootState = ReturnType<typeof rootReducer>
