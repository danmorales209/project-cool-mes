import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
    state = {
        activeOrders: "",
        completedOrders: "",
        productAInv:"",
        productBInv:"",
        productCInv:"",
    };

    componentDidMount() {
        // this.loadBooks();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Row>
                            <Col size="md-6">
                                <Card>
                                <h2>Products/Recipes</h2>
                                </Card>
                            </Col>
                            <Col size="md-6">
                                <Card>
                                <h2>Monitor Inventory</h2>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-6">
                                <Card>
                                <h2>Orders</h2>
                                </Card>
                            </Col>
                            <Col size="md-6">
                                <Card>
                                    <h2>Monitor Inventory</h2>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Jumbotron>
                            <h2>Dashboard</h2>
                        // Product A Inventory
                        // Product B Inventory
                        // Product C Inventory
                        // active activeOrders
                        // completedOrders
                        // any alerts
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;
