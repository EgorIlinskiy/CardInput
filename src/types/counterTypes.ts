export interface CounterTypes{
    count:number
}


export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}
interface IcrementAction {
    type: CounterActionTypes.INCREMENT
}
interface DecrementAction {
    type: CounterActionTypes.DECREMENT
}

export type CounterAction = IcrementAction | DecrementAction

