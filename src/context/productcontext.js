import React,{ createContext } from "react";
const AppContext = createContext();
const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{ myName: "bibek" }}>
      {children}
    </AppContext.Provider>

  );


}
export { AppProvider, AppContext};