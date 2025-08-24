import { createContext, useContext, useReducer, type ReactNode } from "react";

// =========== UserTypes =====//
interface UserTypes {
  admin: string;
  buyer: string;
  seller: string;
}

// ========== UsersAction =======//
type UsersAction = "admin" | "buyer" | "seller";

// ============ initialState ======//

const initialState: UserTypes = {
  admin: "",
  buyer: "",
  seller: "",
};

// ========== UsersTypeMethods ====//

interface UsersTypeMethods {
  state: UserTypes;
  admin: () => void;
  buyer: () => void;
  seller: () => void;
}

// =========== UserReducer =========//
export const UserReducer = (
  state: UserTypes,
  action: UsersAction
): UserTypes => {
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

// ======== Create Context ========//

const UserContext = createContext<UsersTypeMethods | undefined>(undefined);

// ============ UserProvider =======//
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const values: UsersTypeMethods = {
    state,
    admin: () => dispatch("admin"),
    buyer: () => dispatch("buyer"),
    seller: () => dispatch("seller"),
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// =========== CustomUserContext =======//

export const useUserContext = (): UsersTypeMethods => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("No Context Data Found");
  }
  return context;
};
