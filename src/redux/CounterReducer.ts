export type CounterType = {
    counter: number
    minValue: number
    maxValue: number
    displaySet: boolean
}

const initialState = {
    counter: 0,
    minValue: 0,
    maxValue: 5,
    displaySet: false,
}

const SET_COUNTER_VALUE = 'SET-COUNTER-VALUE'
const INC_COUNTER_VALUE = 'INC-COUNTER-VALUE'
const SET_MIN_VALUE = 'SET-MIN-VALUE'
const SET_MAX_VALUE = 'SET-MIN-VALUE'
const SET_DISPLAY_SET = 'SET-DISPLAY-SET'

type ActionsType = ReturnType<typeof setMinValue> | ReturnType<typeof setMaxValue> | ReturnType<typeof setDisplaySet>
    | ReturnType<typeof incCounter> | ReturnType<typeof setCounter>

export const incCounter = () => ({type: INC_COUNTER_VALUE} as const)
export const setCounter = (counter: number) => ({type: SET_COUNTER_VALUE, payload: {counter}} as const)
export const setMinValue = (minValue: number) => ({type: SET_MIN_VALUE, payload: {minValue}} as const)
export const setMaxValue = (maxValue: number) => ({type: SET_MAX_VALUE, payload: {maxValue}} as const)
export const setDisplaySet = (displaySet: boolean) => ({type: SET_DISPLAY_SET, payload: {displaySet}} as const)


export const CounterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case INC_COUNTER_VALUE:
            return {...state, counter: state.counter + 1}
        case SET_COUNTER_VALUE:
        case SET_MIN_VALUE:
        case SET_MAX_VALUE:
        case SET_DISPLAY_SET:
            return {...state, ...action.payload};

        default:
            return state
    }
}