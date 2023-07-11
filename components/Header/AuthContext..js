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
  const [isLoggedIn, setIsLoggedIn] = useState({status:false,username:''});

  const login = (username) => {
    
    setIsLoggedIn({status:true, username:[username]});
  };

  const logout = () => {
    setIsLoggedIn({status:false, username:""});
  };

  const authContextValue = {
    isLoggedIn,
    login,
    logout, 
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};