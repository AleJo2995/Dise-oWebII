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

class DeleteBuseta extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    componentDidMount(){

    }

    resetState() {
        this.setState(initialState);
    }

    eliminarBuseta() {
        axios.delete(this.state.configUrl + '/busetas/delete/' + this.state.code)
            .then((response) => {
                // handle success 
                console.log("Buseta Eliminada" );
                this.resetState();
                alert("Buseta Eliminada");
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
                                    <Button variant="primary" onClick={() => this.eliminarBuseta()}>
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

export default DeleteBuseta;
