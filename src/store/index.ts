import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./reducers";


export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
)