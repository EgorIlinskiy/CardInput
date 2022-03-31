import {RootState} from "../reducers";

export function selectLanguage(state:RootState){
    return state.translation.language
}