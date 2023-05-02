import {createContext, useState} from "react";
import PersonService from "../services/person.service.js";

export const PersonContext = createContext({});

export const PersonProvider = ({ children }) => {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const personService = new PersonService();

    const loadPersons = async () => {
        setIsLoading(true)
        const response = await personService.getAll();
        setPersons(response);
        console.log(response)
        setIsLoading(false);
    }

    return (
        <PersonContext.Provider value={{persons, loadPersons, isLoading}}>
            {children}
        </PersonContext.Provider>
    )
}