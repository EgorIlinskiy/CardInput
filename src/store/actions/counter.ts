import {CounterAction, CounterActionTypes} from "../../types/counterTypes";

export function IncrementCount():CounterAction{
    return {type: CounterActionTypes.INCREMENT}
}
export function DecrementCount():CounterAction{
    return {type: CounterActionTypes.DECREMENT}
}