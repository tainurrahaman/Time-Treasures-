import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const valueInfo = { user };
  return (
    <div>
      <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
