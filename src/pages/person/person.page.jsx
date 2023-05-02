import {ButtonWrapper, Container} from "./styles.js";
import {PersonContext, PersonProvider} from "../../context/person-context";
import {useContext, useEffect, useState} from "react";
import PersonsTable from "../../components/persons-table/persons-table.jsx";
import ModalPersonForm from "../../components/modal-person-form/modal-person-form.jsx";
import {App, Button, Space} from "antd";

const PersonPageContent = () => {
    const {persons, loadPersons, isLoading, setSelectedPerson, deletePerson} = useContext(PersonContext);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        loadPersons();
    }, [])

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }

    const handleCreate = async (values) => {
        setModalIsOpen(false);
        await loadPersons();
    }

    const handleClose = () => {
        setModalIsOpen(false)
    }

    const handleEdit = (id) => {
        const person = persons.find(x => x.id === id);

        if(!person) {
            return;
        }

        setSelectedPerson(person)
        setModalIsOpen(true);
    }

    const handleDelete = async (id) => {
        const person = persons.find(x => x.id === id);

        if(!person) {
            return;
        }

        await deletePerson(id);
        loadPersons();
    }

    return (
        <Container>
            <ButtonWrapper>
                <Button type="primary" onClick={handleOpenModal}>Adicionar</Button>
            </ButtonWrapper>
            <PersonsTable persons={persons} loading={isLoading} onEdit={handleEdit} onDelete={handleDelete}/>
            <ModalPersonForm open={modalIsOpen} onCreate={handleCreate} onCancel={handleClose}/>
        </Container>
    )
}

const PersonPage = () => (
    <App>
        <PersonProvider>
            <PersonPageContent/>
        </PersonProvider>
    </App>
)

export default PersonPage;