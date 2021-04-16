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
};

class DeleteCliente extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    componentDidMount(){

    }

    resetState() {
        this.setState(initialState);
    }

    eliminarCliente() {
        axios.delete(this.state.configUrl + '/clientes/delete/' + this.state.code)
            .then((response) => {
                // handle success 
                console.log("Cliente Eliminado" );
                this.resetState();
                alert("Cliente Eliminado");
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
        const { code} = this.state;

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Eliminar busetas">
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte codigo" name="code" value={code} onChange={(e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Button variant="primary" onClick={() => this.eliminarCliente()}>
                                        Delete
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

export default DeleteCliente;
