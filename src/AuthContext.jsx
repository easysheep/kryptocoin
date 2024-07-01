import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logedin, setlogedin] = useState(false);
  const [mylist,setmylist]=useState([]);
  const [sno,setsno]=useState(0);


  return (
    <AuthContext.Provider value={{ logedin,setlogedin,mylist,setmylist,sno,setsno}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};





