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

class Clientes extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            columns : ["Codigo", "Nombre", "Primer Apellido", "Segundo Apellido", "Identificación"],
            data : [],
            configUrl: config.SERVER_URL,
        };
    }

    componentDidMount(){
        this.loadClientes();
    }

    convertToExpectedFormat(data){
        let formattedData = [];
        data.forEach(element => {
            formattedData.push(Object.values(element));
        });
        return formattedData;
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

    render() {        
        const {columns, data } = this.state;


        const options = {
            filterType: 'checkbox',
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Visualizar Clientes">
                            <MUIDataTable
                            title={"Lista de Clientes"}
                            data={data}
                            columns={columns}
                            options={options}
                            />
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Clientes;
