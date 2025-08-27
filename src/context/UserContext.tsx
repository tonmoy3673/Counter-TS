import { createContext, useReducer } from "react";

// ======= UserContext ======//
interface UserContext {
  admin: string;
  buyer: string;
  seller: string;
}

// ========= UserAction =======//
type UserAction = "admin" | "buyer" | "seller";

// ========== UserMethod ======//
interface UserMethod {
  state: UserContext;
  admin: () => void;
  buyer: () => void;
  seller: () => void;
}

// ====== initialState =====//
const initialState: UserContext = {
  admin: "",
  buyer: "",
  seller: "",
};

// =========== UserReducer =====//
const UserReducer = (state: UserContext, action: UserAction): UserContext => {
  if (action === "admin") {
    return { ...state, admin: state.admin };
  }
  if (action === "buyer") {
    return { ...state, buyer: state.buyer };
  }
  if (action === "seller") {
    return { ...state, seller: state.seller };
  }
  return state;
};

// ============ CreateUserContext ======//

const UserContext = createContext<UserMethod | undefined>(undefined);

// ============== UserContextProvider =====//
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const values = {
    state,
    admin: () => dispatch("admin"),
    buyer: () => dispatch("buyer"),
    seller: () => dispatch("seller"),
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
};

