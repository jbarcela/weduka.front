import {createContext, useState} from "react";

export const PersonContext = createContext({});

export const PersonProvider = ({ children }) => {
    const [persons, setPersons] = useState([]);

    return (
        <PersonContext.Provider value={{persons}}>
            {children}
        </PersonContext.Provider>
    )
}