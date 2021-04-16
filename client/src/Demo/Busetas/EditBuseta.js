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
    propertyValue: '',
    propertyName:''
};

class EditBuseta extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    componentDidMount(){

    }

    resetState() {
        this.setState(initialState);
    }

    editarBuseta() {
        const buseta = {
            [this.state.propertyName]: this.state.propertyValue,
        }
        axios.patch(this.state.configUrl + '/busetas/edit/' + this.state.code, buseta )
            .then((response) => {
                // handle success 
                console.log("Buseta Editada" );
                this.resetState();
                alert("Buseta Editada");
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
        const { code, propertyName, propertyValue} = this.state;

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Edición de busetas">
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte codigo" name="code" value={code} onChange={(e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Campo a cambiar</Form.Label>
                                        <Form.Control as="select" name="propertyName" value={propertyName} onChange={ (e) => this.handleChange(e) }>
                                                <option>name</option>
                                                <option>brand</option>
                                                <option>model</option>
                                                <option>year</option>
                                                <option>licensePlate</option>
                                                <option>defaultSpaces</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Valor del campo</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte valor" name="propertyValue" value={propertyValue} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Button variant="primary" onClick={() => this.editarBuseta()}>
                                        Editar
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

export default EditBuseta;