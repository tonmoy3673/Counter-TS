// ========= stateCounter ========//

import { createContext, useContext, useReducer } from "react";

interface StateCounter {
  count: number;
}

// =========== CounterAction ========//
type CounterAction = "increment" | "decrement" | "reset";

// ========= initialState =======//
const initialState: StateCounter = {
  count: 0,
};

// ========= ContextTypes =======//
interface ContextTypes {
  state: StateCounter;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function contextReducer(
  state: StateCounter,
  action: CounterAction
): StateCounter {
  if (action === "increment") {
    return { count: state.count + 1 };
  }
  if (action === "decrement") {
    return { count: state.count - 1 };
  }
  if (action === "reset") {
    return { count: 0 };
  }
  return state;
}

const ContextCounter = createContext<ContextTypes | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value: ContextTypes = {
    state,
    increment: () => dispatch("increment"),
    decrement: () => dispatch("decrement"),
    reset: () => dispatch("reset"),
  };

  return (
    <ContextCounter.Provider value={value}>{children}</ContextCounter.Provider>
  );
};

export const useCounter = (): ContextTypes => {
  const context = useContext(ContextCounter);
  if (!context) {
    throw new Error("No data found");
  }
  return context;
};
