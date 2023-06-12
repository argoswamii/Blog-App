import React, { createContext, useState } from "react";
export const Loginstatus = createContext();
const Context = ({ children }) => {
  const [status, Setstatus] = useState([]);
  return (
    <Loginstatus.Provider value={{ status, Setstatus }}>
      {children}
    </Loginstatus.Provider>
  );
};

export default Context;
