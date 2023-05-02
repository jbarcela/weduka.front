import {Button, Space, Table, Tooltip} from "antd";
import {ActionsWrapper, Contact, Contacts, ContactWrapper, Container} from "./styles.js";
import {DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined} from "@ant-design/icons";

const PersonsTable = ({persons, loading}) => {

    const renderIcon = (type) => {
        switch (type) {
            case 'whatsapp':
                return <WhatsAppOutlined/>;
            case 'phone':
                return <PhoneOutlined/>;
            case 'e-mail':
                return <MailOutlined/>;
        }
    }

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Contatos',
            key: 'contacts',
            render: (_, record) => {
                return (
                    <Contacts>
                        {record.contacts.map((c, index) => (
                            <ContactWrapper key={index}>
                                {renderIcon(c.type)}
                                <Contact>{c.value}</Contact>
                            </ContactWrapper>
                        ))}
                    </Contacts>
                )
            }
        },
        {
            title: '',
            key: 'actions',
            render: (_, record) => {
                return (
                    <ActionsWrapper>
                        <Space size="small">
                            <Tooltip title="Editar">
                                <Button icon={<EditOutlined/>}/>
                            </Tooltip>
                            <Tooltip title="Excluir">
                                <Button icon={<DeleteOutlined/>}/>
                            </Tooltip>
                        </Space>
                    </ActionsWrapper>
                )
            }
        }
    ]

    return (
        <Container>
            <Table
                columns={columns}
                dataSource={persons}
                loading={loading}
            />
        </Container>
    )
}

export default PersonsTable