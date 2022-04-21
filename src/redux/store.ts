import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>