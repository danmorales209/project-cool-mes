import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
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
        productAInv: "",
        productBInv: "",
        productCInv: "",
    };

    componentDidMount() {
        // this.loadBooks();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <Row>
                            <Col size="md-3">
                                <Card>
                                    <h2>Products/Recipes</h2>
                                    <CardImg top src="https://via.placeholder.com/100" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col size="md-3">
                                <Card>
                                    <h2>Monitor Inventory</h2>
                                    <CardImg top src="https://via.placeholder.com/100" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col size="md-3">
                                <Card>
                                    <h2>Orders</h2>
                                    <CardImg top src="https://via.placeholder.com/100" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col size="md-3">
                                <Card>
                                    <h2>Manufacturing</h2>
                                    <CardImg top src="https://via.placeholder.com/100" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-4">
                        <Jumbotron>
                            <h2>Dashboard</h2>
                            <p>Product A Inventory</p>
                            <p>Product B Inventory</p>
                            <p>Product C Inventory</p>
                            <p>active activeOrders</p>
                            <p>completedOrders</p>
                            <p>any alerts</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;
