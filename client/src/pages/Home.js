import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";


class Home extends Component {
    state = {
        newOrders: [],
        inProgressOrders: [],
        completedOrders: [],
    };

    componentDidMount() {
        this.loadOrders();
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

    render() {
        console.log(this.state.newOrders)
        return (
            <div className="container">
                <Container fluid>
                    <Row>
                        <Col size="md-8">
                            <Row>
                                <Col size="md-6">
                                    <Card>
                                        <CardImg top src="./images/products2.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Products</h2></CardTitle>
                                            <CardText>Products, recipes or list a new product.</CardText>
                                            <Link to="/products"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col size="md-6">
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
                                <Col size="md-6">
                                    <Card>
                                        <CardImg top src="./images/order.jpg" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h2>Orders</h2></CardTitle>
                                            <CardText>Orders Past and Orders Present</CardText>
                                            <Link to="/orders"><Button>Open</Button></Link>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col size="md-6">
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
                        <Col size="md-4">
                            <Jumbotron>
                                <h2>Dashboard</h2>
                                {/* <p>Product A Inventory</p>
                                <p>Product B Inventory</p>
                                <p>Product C Inventory</p> */}
                                <p>New Orders: {this.state.newOrders.length}</p>
                                <p>Orders In Progress: {this.state.inProgressOrders.length}</p>
                                <p>Completed Orders: {this.state.completedOrders.length}</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home;
