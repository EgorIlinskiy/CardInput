import {CounterAction, CounterActionTypes, CounterTypes} from "../../types/counterTypes";

const initialState:CounterTypes = {
    count: 0
}

export const counterReducers = (state = initialState, action: CounterAction):CounterTypes => {
            switch (action.type) {
                case CounterActionTypes.INCREMENT:
                    return {...state, count: state.count+1 }
                case CounterActionTypes.DECREMENT:
                    return {...state, count: state.count-1 }
                default:
                    return state
            }

}


