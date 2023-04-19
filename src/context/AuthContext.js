import { createContext, useState } from 'react';

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);
  
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}
