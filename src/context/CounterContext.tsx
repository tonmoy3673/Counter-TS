import React, { createContext, useContext, useReducer } from "react";

// ====== CounterState ======//
interface CounterState {
    count: number
};

// ======== CounterAction ======//
type CounterAction = 'increment' | 'decrement' | 'reset';


// ========== CounterMethod ======//
interface CounterMethod{
    state : CounterState;
    increment: ()=> void;
    decrement : ()=> void;
    reset : ()=> void;
};

// =========== initialState =======//

const initialState: CounterState ={
    count:0
};

// ========= ReducerFunction ========//

const ReducerFunction = (state:CounterState, action : CounterAction): CounterState=>{
    if (action==="increment") {
        return {count: state.count+1}
    }
    if (action==='decrement') {
        return {count: state.count-1}
    }
    if (action==='reset') {
        return {count:0}
    }
    return state;

};

// ============== CreateCounterContext ======//

const CounterContext = createContext<CounterMethod|undefined>(undefined);

// =========== CounterContextProvider ========//

export const CounterContextProvider : React.FC<{children: React.ReactNode}> =({children})=>{
    const [state,dispatch] = useReducer(ReducerFunction,initialState);

    const values: CounterMethod ={
        state,
        increment : ()=>dispatch("increment"),
        decrement : () =>dispatch('decrement'),
        reset : ()=> dispatch('reset')

    }

    return(
        <CounterContext.Provider value={values}>
            {children}
        </CounterContext.Provider>
    )
}

// ========== useCounter hook =======//
export const useCounter =(): CounterMethod=>{
    const context = useContext(CounterContext);

    if (!context) throw new Error('No Context Found!')
        return context;
};

