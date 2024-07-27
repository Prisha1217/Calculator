import { createContext, useContext, useState } from "react";
export const CalcContext= createContext({value: '0'})


export const CalcProvider = ({ children }) => {
    const [value, setValue] = useState('0');
  
    return (
      <CalcContext.Provider value={{ value, setValue }}>
        {children}
      </CalcContext.Provider>
    );
  };

export default function useCalc(){
    return useContext(CalcContext)
}