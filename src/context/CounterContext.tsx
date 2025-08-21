import React from "react";

// ======= state type =======//
interface CounterState {
  count: number;
}

// ========== action types =========//
type CounterAction =
  | {
      type: "increment";
    }
  | { type: "decrement" }
  | { type: "reset" };

// ======== initial state ========//
const initialState: CounterState = { count: 0 };

// =========== CounterContext Methods ======//
type CounterContextType = {
  state: CounterState;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

function counterReducer(state:CounterState, action:CounterAction):CounterState | undefined {
    if(action.type==='increment'){
        return {count: state.count+1}
    }
    if (action.type ==="decrement") {
        return {count: state.count-1}
    }
    if (action.type ==='reset') {
        return{count:0}
    }
    return state;
}

const CounterContext: React.FC = () => {
  return <div></div>;
};

export default CounterContext;
