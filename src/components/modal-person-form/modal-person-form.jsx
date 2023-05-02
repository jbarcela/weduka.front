import {Button, Form, Input, Modal, Select, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

const ModalPersonForm = ({open, onCreate, onCancel, person}) => {
    const [form] = Form.useForm();

    return (
        <Modal
            open={open}
            title="Adicionar nova pessoa"
            okText="Adicionar"
            cancelText="Cancelar"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="add_person"
                initialValues={person}
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