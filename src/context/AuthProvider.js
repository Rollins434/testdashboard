import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({})
  return (
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

/* import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth ? JSON.parse(savedAuth) : {};
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; */
