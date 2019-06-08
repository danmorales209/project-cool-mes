import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron, Alert
} from 'reactstrap';
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    state = {
        newOrders: [],
        inProgressOrders: [],
        completedOrders: [],
        inventoryAlerts: [],
    };

    componentDidMount() {
        this.loadOrders();
        this.loadInventory();
    }
    loadOrders = () => {
        axios.get("/api/order/GET").then((res) => {
            this.setState({
                newOrders: res.data.filter(orders => orders.priority === 0),
                inProgressOrders: res.data.filter(orders => orders.priority === 1),
                completedOrders: res.data.filter(orders => orders.priority === 2),
            });
        })
    }
    loadInventory = () => {
        axios.get("/api/inventory/GET").then(res => {
            console.log(res.data);
            this.setState({
                inventoryAlerts: res.data.filter(inventory => inventory.quantity < 300)
            })
        })
    }

    render() {
        return (
            <div className="container">
                <Container fluid>
                    <Row>
                        <Col size="sm-4">
                            <Row >
                                <Jumbotron style={{ width: "100%", marginLeft: "0px", marginRight: "0px" }}>
                                    <h2>Dashboard</h2>

                                    <h4>New Orders: {this.state.newOrders.length}</h4>
                                    <h4>Orders In Progress: {this.state.inProgressOrders.length}</h4>
                                    <h4>Completed Orders: {this.state.completedOrders.length}</h4>


                                </Jumbotron>
                            </Row>
                            <Row >

                                {this.state.inventoryAlerts.map(el => <Alert style={{ backgroundColor: "#f44242", color: "white", width: "100%" }}> <h4>Alert</h4>
                                    <p><strong>{el.name}</strong> has low quantity<br></br> quantity: {el.quantity} {el.unit} </p> </Alert>)}
                            </Row>
                        </Col>
                        <Col size="sm-8">
                            <Row>
                                <Col size="sm-6">
                                    <Card>
                                        <CardImg top src="./images/products2.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Products</h2></CardTitle>
                                            <CardText>Products, recipes or list a new product.</CardText>
                                            <Link to="/products"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col size="sm-6">
                                    <Card>
                                        <CardImg top src="./images/inventory.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Monitor Inventory</h2></CardTitle>
                                            <CardText>Equipment and Materials</CardText>
                                            <Link to="/inventory"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="sm-6">
                                    <Card>
                                        <CardImg top src="./images/order.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Orders</h2></CardTitle>
                                            <CardText>Orders Past and Orders Present</CardText>
                                            <Link to="/orders"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col size="sm-6">
                                    <Card>
                                        <CardImg top src="./images/manufacturing.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Manufacturing</h2></CardTitle>
                                            <CardText>Ready to go into production?</CardText>
                                            <Link to="/manufacturing"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home;
