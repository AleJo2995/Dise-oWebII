import React from 'react';
import {
    Row,
    Col,
    Button,
    Form, InputGroup, FormControl, DropdownButton, Dropdown
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import MUIDataTable from "mui-datatables";
import config from '../../config.js'

const axios = require('axios');
const initialState = {
    codeCliente: '',
    codeBuseta: ''
};

class Reservar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            columnsForBusetas : ["Codigo", "Nombre", "Marca", "Modelo", "Año", "Placa", "Espacios por defecto", "Espacios vacios" ],
            dataForBusetas : [],
            columns : ["Codigo", "Nombre", "Primer Apellido", "Segundo Apellido", "Identificación"],
            data : [],
            configUrl: config.SERVER_URL,
            codeBuseta: '',
            codeCliente: ''
        };
    }

    componentDidMount(){
        this.loadBusetas();
        this.loadClientes();
    }

    convertToExpectedFormat(data){
        let formattedData = [];
        data.forEach(element => {
            formattedData.push(Object.values(element));
        });
        return formattedData;
    }

    resetState() {
        this.setState(initialState);
    }

    loadBusetas() {
        axios.get( this.state.configUrl + '/busetas/')
            .then((response) => {
                // handle success 
                const newData = this.convertToExpectedFormat(response.data);
                this.setState({ dataForBusetas: newData });
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

    loadClientes() {
        axios.get( this.state.configUrl + '/clientes/')
            .then((response) => {
                // handle success 
                const newData = this.convertToExpectedFormat(response.data);
                this.setState({ data: newData });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    reservar() {
        axios.get( this.state.configUrl + '/busetas/availableSpaces/' + this.state.codeBuseta)
            .then((response) => {
                // handle success 
                if(response.data.spacesAvailable !== 0 ){
                    const newSpacesAvailable = {
                        spacesAvailable: response.data.spacesAvailable - 1
                    };
                    axios.patch(this.state.configUrl + '/busetas/saveASeat/' + this.state.codeBuseta, newSpacesAvailable)
                        .then((response) => {
                            // handle success 
                            console.log("Espacio Reservado" );
                            this.resetState();
                            alert("Espacio Reservado");
                            this.loadBusetas();
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                    })
                } else {
                    alert("Esta buseta no cuenta con más espacios disponibles. Intente con otra buseta");
                }
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
        })
    }

    render() {        
        const {columns, data, columnsForBusetas, dataForBusetas, codeCliente, codeBuseta } = this.state;
        const options = {
            filterType: 'checkbox',
        };

        return (
            <Aux>
                <Row>
                    <Col md={6}>
                        <Card title="Busetas disponibles">
                            <MUIDataTable
                            key="busetas"
                            title={"Lista de Busetas"}
                            data={dataForBusetas}
                            columns={columnsForBusetas}
                            options={options}
                            />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Visualizar Clientes">
                            <MUIDataTable
                            key="clientes"
                            title={"Lista de Clientes"}
                            data={data}
                            columns={columns}
                            options={options}
                            />
                        </Card>
                    </Col>
                </Row>
                <Card title="Reservar Buseta">
                    <Col md={12}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Código Cliente</Form.Label>
                                <Form.Control type="input" placeholder="Inserte codigo" name="codeCliente" value={codeCliente} onChange={(e) => this.handleChange(e) } />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Código Buseta</Form.Label>
                                <Form.Control type="input" placeholder="Inserte codigo" name="codeBuseta" value={codeBuseta} onChange={(e) => this.handleChange(e) } />
                            </Form.Group>
                            <Button variant="primary" onClick={() => this.reservar()}>
                                Reservar
                            </Button>
                        </Form>
                    </Col>
                </Card>                
            </Aux>
        );
    }
}

export default Reservar;
