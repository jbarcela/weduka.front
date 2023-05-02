import {Button, Form, Input, Modal, Select, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {useContext, useState} from "react";
import {PersonContext} from "../../context/person-context.jsx";

const ModalPersonForm = ({open, onCreate, onCancel, person}) => {
    const [form] = Form.useForm();
    const { selectedPerson, setSelectedPerson, addPerson, isAddLoading, updatePerson } = useContext(PersonContext);

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    }

    const handleOk = async () => {
        const values = await form.validateFields();
        if(selectedPerson) {
            let person = {
                id: selectedPerson.id,
                ...values
            }
            await updatePerson(person)
        } else {
            await addPerson(values)
        }

        form.resetFields();
        setSelectedPerson(null);
        onCreate(values);
    }

    return (
        <Modal
            open={open}
            title={selectedPerson ? "Editar pessoa" : "Adicionar nova pessoa"}
            okText={selectedPerson ? "Editar" : "Adicionar"}
            cancelText="Cancelar"
            onCancel={handleCancel}
            onOk={handleOk}
            confirmLoading={isAddLoading}
        >
            <Form
                form={form}
                layout="vertical"
                name="add_person"
                initialValues={selectedPerson}
            >
                <Form.Item
                    name="name"
                    label="Nome*"
                    rules={[
                        {
                            required: true,
                            message: 'Nome é obrigatório'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.List name="contacts">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map(({key, name, ...restField}) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                    }}
                                    align="baseline"
                                    size="small"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'type']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Tipo é obrigatório',
                                            },
                                        ]}
                                        style={{
                                            width: '140px',
                                        }}
                                    >
                                        <Select placeholder="Selecionar tipo">
                                            <Option value="whatsapp">Whatsapp</Option>
                                            <Option value="phone">Telefone</Option>
                                            <Option value="e-mail">E-mail</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, 'value']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Contato é obrigatório',
                                            },
                                        ]}
                                        style={{
                                            width: '300px',
                                        }}
                                    >
                                        <Input placeholder="Contato" />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Adicionar contato
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Form>
        </Modal>
    )
}

export default ModalPersonForm;