import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return authContext;
};

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  // Wrap the children components with the AuthContext.Provider
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
