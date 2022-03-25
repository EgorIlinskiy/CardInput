export interface CounterStateTypes{
    count:number
}


export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}
interface IncrementAction {
    type: CounterActionTypes.INCREMENT
}
interface DecrementAction {
    type: CounterActionTypes.DECREMENT
}

export type CounterAction = IncrementAction | DecrementAction

