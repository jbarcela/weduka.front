import {createContext, useState} from "react";
import PersonService from "../services/person.service.js";
import {App} from "antd";

export const PersonContext = createContext({});

export const PersonProvider = ({children}) => {
    const [persons, setPersons] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAddLoading, setIsAddLoading] = useState(false);
    const personService = new PersonService();
    const {message} = App.useApp();

    const loadPersons = async () => {
        setIsLoading(true)
        const response = await personService.getAll();
        setPersons(response);
        setIsLoading(false);
    }

    const addPerson = async (person) => {
        setIsAddLoading(true)
        try {
            const response = await personService.create(person);
            message.success('Adicionado com sucesso');
        } catch (e) {
            message.error('Ocorreu um erro ao adicionar');
            console.log(e)
        } finally {
            setIsAddLoading(false);
        }
    }

    const updatePerson = async (person) => {
        setIsAddLoading(true)
        try {
            const response = await personService.update(person);
            message.success('Editado com sucesso');
        } catch (e) {
            message.error('Ocorreu um erro ao editar');
            console.log(e)
        } finally {
            setIsAddLoading(false);
        }
    }

    const deletePerson = async (id) => {
        setIsLoading(true);
        try {
            await personService.delete(id);
            message.success('Excluído com sucesso');
        } catch (e) {
            message.error('Ocorreu um erro ao excluir');
            console.log(e)
        }
    }

    return (
        <PersonContext.Provider value={{
            persons,
            loadPersons,
            isLoading,
            addPerson,
            isAddLoading,
            setSelectedPerson,
            selectedPerson,
            deletePerson,
            updatePerson
        }}>
            {children}
        </PersonContext.Provider>
    )
}