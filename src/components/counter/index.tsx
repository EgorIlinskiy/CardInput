import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {DecrementCount, IncrementCount} from "../../store/actions/counter";
function Counter(){
    const count = useTypedSelector(state => state.counter.count)
    const  {IncrementCount, DecrementCount}  = useActions()
    return <div>
        <h1>
            Counter: {count}
        </h1>
        <button
            onClick={()=> IncrementCount()}
        >
            Increment
        </button>
        <button
            onClick = {()=> DecrementCount()}
        >
            Decrement
        </button>
    </div>
}

export default Counter