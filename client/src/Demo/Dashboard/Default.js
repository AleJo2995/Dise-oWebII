import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import LockIcon from '@material-ui/icons/Lock';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PeopleIcon from '@material-ui/icons/People';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssessmentIcon from '@material-ui/icons/Assessment';
import UcFirst from "../../App/components/UcFirst";


import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import { Link, Redirect } from "react-router-dom";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        {/* <i className="fa fa-facebook text-primary f-36"/> */}
                                        <LockIcon fontSize="large"  />
                                    </div>
                                    <div className="col text-right">
                                        <h3>Busetas</h3>
                                        <h5><span className="text-muted">Gestione busetas</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-12">
                                        <OverlayTrigger key={1} overlay={<Tooltip>{'Ingresar'}</Tooltip>}>
                                            {/* <Button className="col-12" variant={'outline-primary'}><UcFirst text={'Ingresar'} /></Button> */}
                                            <Button className="col-12" variant={'outline-primary'}><Link to="/busetas"> Ingresar </Link></Button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className='card-social'>
                            <Card.Body className='border-bottom'>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <PeopleIcon fontSize="large"/>
                                    </div>
                                    <div className="col text-right">
                                        <h3>Clientes</h3>
                                        <h5 > <span className="text-muted">Maneje y visualice su cartera de clientes</span></h5>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center card-active">
                                    <div className="col-12">
                                        <OverlayTrigger key={1} overlay={<Tooltip>{'Manejar'}</Tooltip>}>
                                            <Button className="col-12" variant={'outline-success'}><Link to="/clientes"> Manejar </Link></Button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;