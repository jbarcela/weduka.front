import {
    Container,
    Item,
    Initial,
    List,
    Content,
    Avatar,
    NameAndContact,
    Name,
    Contact,
    Actions,
    ActionButton
} from './styles'

import {Fragment} from "react";

import { MdModeEdit, MdDelete } from 'react-icons/md'

function orderByName(persons) {
    return persons.sort((a, b) => a.name.localeCompare(b.name));
}

const PersonsList = ({persons}) => {
    const sortedPersons = orderByName(persons);
    const groupedPersons = {};

    sortedPersons.forEach(person => {
        const initial = person.name.charAt(0).toUpperCase();

        if (!groupedPersons[initial]) {
            groupedPersons[initial] = [];
        }

        groupedPersons[initial].push(person);
    });

    const handleEdit = (id) => {
        console.log(id)
    }

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <Container>
            <Content>
                {Object.keys(groupedPersons).map((initial) => (
                    <Fragment key={initial}>
                        <Initial>{initial}</Initial>
                        <List>
                            {groupedPersons[initial].map(person => (
                                <Item key={person.id}>
                                    <Avatar alt="person-avatar" src="https://cdn-icons-png.flaticon.com/512/6073/6073874.png" />
                                    <NameAndContact>
                                        <Name>{person.name}</Name>
                                        {person.contacts.map((contact, index) => (
                                            <Contact key={index}>{contact.value}</Contact>
                                        ))}
                                    </NameAndContact>
                                    <Actions>
                                        <ActionButton onClick={() => handleEdit(person.id)}>
                                            <MdModeEdit size={22}/>
                                        </ActionButton>
                                        <ActionButton onClick={() => handleDelete(person.id)}>
                                            <MdDelete size={22}/>
                                        </ActionButton>
                                    </Actions>
                                </Item>
                            ))}
                        </List>
                    </Fragment>
                ))}
            </Content>
        </Container>
    )
}

export default PersonsList;