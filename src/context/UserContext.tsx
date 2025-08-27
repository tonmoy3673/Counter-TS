import { createContext, useContext, useReducer } from "react";

// ======= UserContext ======//
interface UserContext {
  userType: {
    admin: string | null;
    buyer: string | null;
    seller: string | null;
  };
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
  userType: {
    admin: null,
    buyer: null,
    seller: null,
  },
};

// =========== UserReducer =====//
const UserReducer = (state: UserContext, action: UserAction): UserContext => {
  if (action === "admin") {
    return {...state, userType: { ...state.userType, admin: "admin", buyer:"",seller:"" } };
  }
  if (action === "buyer") {
    return {...state, userType: { ...state.userType, buyer: "buyer", admin:"", seller:"" } };
  }
  if (action === "seller") {
    return { ...state,userType: { ...state.userType, seller: "seller" ,buyer:"", admin:"" } };
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

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// ======= custom UserContext ======//
export const useUserContext = (): UserMethod => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("No Context Found");
  }
  return context;
};
