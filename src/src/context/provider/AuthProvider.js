import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/AuthReducer";

const AuthContext = createContext({ state: {}, dispatch: () => {} });

const AuthProvider = ({ children }) => {
  const defaultData = {
    token: "",
    user: {},
    loggedIn: false,
  };
  const [state, dispatch] = useReducer(reducer, defaultData);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
