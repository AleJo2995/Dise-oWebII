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
    nameOfBuseta: '',
    model:'',
    brand:'',
    year : '',
    licensePlate : '',
    defaultSpaces : 0,
};

class Busetas extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState
    }

    componentDidMount(){

    }

    resetState() {
        this.setState(initialState);
    }

    createBuseta() {
        const buseta = {
            code: this.state.code,
            name: this.state.nameOfBuseta,
            brand: this.state.brand,
            model:this.state.model,
            year:this.state.year,
            licensePlate: this.state.licensePlate,
            defaultSpaces:this.state.defaultSpaces,
            spacesAvailable:this.state.defaultSpaces,
        }
        axios.post(this.state.configUrl + '/busetas/create', buseta )
            .then((response) => {
                // handle success 
                console.log("Buseta Insertada" );
                this.resetState();
                alert("Buseta insertada");
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
        const { code, nameOfBuseta, brand, year, licensePlate, model, defaultSpaces} = this.state;


        const options = {
            filterType: 'checkbox',
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Creación de busetas">
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte codigo" name="code" value={code} onChange={(e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte nombre" name="nameOfBuseta" value={nameOfBuseta} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Marca</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte marca" name="brand" value={brand} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Modelo</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte modelo" name="model" value={model} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Año</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte año" name="year" value={year} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Placa</Form.Label>
                                        <Form.Control type="input" placeholder="Inserte placa" name="licensePlate" value={licensePlate} onChange={ (e) => this.handleChange(e) } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Espacios por defecto</Form.Label>
                                        <Form.Control type="input" placeholder="Password" name="defaultSpaces" value={defaultSpaces} onChange={ (e) => this.handleChange(e) }/>
                                    </Form.Group>
                                    <Button variant="primary" onClick={() => this.createBuseta()}>
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

export default Busetas;
