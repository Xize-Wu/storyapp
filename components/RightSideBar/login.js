// AuthContext.js
import { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook: useAuth
export const useAuth = () => {
  // Access the authentication state and functions using useContext
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return authContext;
};

// AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  // State for authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Functions for login and logout
  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  // Value to be provided by the context
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
