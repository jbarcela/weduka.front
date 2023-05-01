import PersonsList from "../../components/persons-list/persons-list.jsx";
import {Container} from "./styles.js";
import {PersonProvider} from "../../context/person-context";

const PersonPageContent = () => {
    const persons = [
        {
            name: 'Pessoa 1',
            contacts: [
                {
                    type: 'phone',
                    value: '51982237199'
                },
                {
                    type: 'whatsapp',
                    value: '51982237199'
                }
            ]
        },
        {
            name: 'Pessoa 2',
            contacts: [
                {
                    type: 'phone',
                    value: '51982237199'
                },
                {
                    type: 'e-mail',
                    value: 'jrbarcela@outlook.com'
                }
            ]
        },
        {
            name: 'Jonathan 2',
            contacts: [
                {
                    type: 'phone',
                    value: '51982237199'
                },
                {
                    type: 'e-mail',
                    value: 'jrbarcela@outlook.com'
                }
            ]
        }
    ]

    return (
        <Container>
            <PersonsList persons={persons} />
        </Container>
    )
}

const PersonPage = () => (
    <PersonProvider>
        <PersonPageContent />
    </PersonProvider>
)

export default PersonPage;