import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import OrderCard from "../components/OrderCards";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Orders extends Component {
  state = {
    newOrders: [],
    queuedOrders: [],
    completeOrders: [],
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>New Orders</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Card>
              <CardBody>
                <CardTitle>New Order</CardTitle>
                <CardText>New Order</CardText>
                <Button>Start New Order</Button>
              </CardBody>
            </Card>
          </Col>
          <Col size="md-3">
            <OrderCard>
              A card for each Active order in the database.
            </OrderCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Queued Orders</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <OrderCard>
              A card for each Queued order in the database.
            </OrderCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Completed Orders</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <OrderCard>
              A card for each Completed order in the database.
            </OrderCard>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Orders;
