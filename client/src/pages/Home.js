import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import reactJumbo from "../components/Jumbo";
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
                                <reactCard>
                                <h2>Products/Recipes</h2>
                                </reactCard>
                            </Col>
                            <Col size="md-6">
                                <reactCard>
                                <h2>Monitor Inventory</h2>
                                </reactCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-6">
                                <reactCard>
                                <h2>Orders</h2>
                                </reactCard>
                            </Col>
                            <Col size="md-6">
                                <reactCard>
                                    <h2>Monitor Inventory</h2>
                                </reactCard>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <reactJumbo>
                            <h2>Dashboard</h2>
                        // dashboard goes here
                        // Product A Inventory
                        // Product B Inventory
                        // Product C Inventory
                        // active activeOrders
                        // completedOrders
                        // any alerts
                        </reactJumbo>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;
