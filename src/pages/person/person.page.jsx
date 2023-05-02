import {Container} from "./styles.js";
import {PersonContext, PersonProvider} from "../../context/person-context";
import {useContext, useEffect, useState} from "react";
import PersonsTable from "../../components/persons-table/persons-table.jsx";
import ModalPersonForm from "../../components/modal-person-form/modal-person-form.jsx";

const PersonPageContent = () => {
    const { persons, loadPersons, isLoading } = useContext(PersonContext);

    useEffect(() => {
        loadPersons();
    }, [])

    const handleCreate = (values) => {
        console.log(values);
    }

    const handleClose = () => {

    }

    return (
        <Container>
            <PersonsTable persons={persons} loading={isLoading}/>
            <ModalPersonForm open={true} onCreate={handleCreate} onCancel={handleClose} />
        </Container>
    )
}

const PersonPage = () => (
    <PersonProvider>
        <PersonPageContent />
    </PersonProvider>
)

export default PersonPage;