import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tutors } from "../assets/data";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(false)
    const currency = "$"
    const value = {tutors, navigate}
  return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;