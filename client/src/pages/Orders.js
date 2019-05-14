import React, { Component } from "react";
import { Card } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Orders extends Component {
  state = {
    newOrders:[],
    queuedOrders:[],
    completeOrders:[],
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New Orders</h1>
              <Card>

              </Card>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Queued Orders</h1>
              <Card>
                
              </Card>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Completed Orders</h1>
              <Card>
                
              </Card>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Orders;
