import React from 'react';
import {
    Row,
    Col,
    Button,
    Form, InputGroup, FormControl, DropdownButton, Dropdown
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import config from '../../config.js'

const axios = require('axios');
const initialState = {
    configUrl: config.SERVER_URL,
    code: '',
    nameOfCliente: '',
    lastName:'',
    secondSurname:'',
    identification : ''
};

class CreateCliente extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    resetState() {
        this.setState(initialState);
    }

    createCliente() {
        const cliente = {
            code: this.state.code,
            name: this.state.nameOfCliente,
            lastName: this.state.lastName,
            secondSurname:this.state.secondSurname,
            identification:this.state.identification
        }
        axios.post(this.state.configUrl + '/clientes/create', cliente )
            .then((response) => {
                // handle success 
                console.log("Cliente Insertado" );
                this.resetState();
                alert("Cliente Insertado");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    render() {        
        const { code, nameOfCliente, lastName, secondSurname, identification} = this.state;


        const options = {
            filterType: 'checkbox',
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Creación de cliente">
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte codigo" name="code" value={code} onChange={(e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte nombre" name="nameOfCliente" value={nameOfCliente} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Primer Apellido</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte primer apellido" name="lastName" value={lastName} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Segundo Apellido</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte segundo apellido" name="secondSurname" value={secondSurname} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Identificación</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte identificación" name="identification" value={identification} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Button variant="primary" onClick={() => this.createCliente()}>
                                        Crear
                                    </Button>
                                </Form>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default CreateCliente;
