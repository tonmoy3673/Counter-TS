import React, { createContext, useContext, useReducer } from "react";

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

function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  if (action.type === "reset") {
    return { count: 0 };
  }
  return state;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const value: CounterContextType = {
    state,
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    reset: () => dispatch({ type: "reset" }),
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

//  =========== Custom Hook =======//

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("Did not find provider");
  }
  return context;
};
