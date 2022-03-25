import {CounterAction, CounterActionTypes, CounterStateTypes} from "../../types/counterTypes";

const initialState:CounterStateTypes = {
    count: 0
}

export const counterReducers = (state = initialState, action: CounterAction):CounterStateTypes => {
            switch (action.type) {
                case CounterActionTypes.INCREMENT:
                    return {...state, count: state.count+1 }
                case CounterActionTypes.DECREMENT:
                    return {...state, count: state.count-1 }
                default:
                    return state
            }

}


