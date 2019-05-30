import React, { Component } from "react";
import AddManufacturing from "../components/AddManufacturing";
import OrderCard from "../components/OrderCards/manufacturingCard";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Manufacturing extends Component {
  state = {
    newOrders: [],
    inProgressOrders: [],
    recipe: {},
  };

  componentDidMount() {
    this.loadOrders();
  }
  loadOrders = () => {
    axios.get("/api/order/GET").then((res) => {
      console.log(res.data, "line 19")
      this.setState({
        newOrders: res.data.filter(orders => orders.priority === 0),
        inProgressOrders: res.data.filter(orders => orders.priority === 1),
      },
        () => {
          // console.log(this.state.newOrders, "line 25");
        }
      );
    })
  }
  handleStartOrder = (id) => {
    axios.post("/api/order/POST/" + id, {
      priority: 1,
      inProgress: "In Progress"
    }).then(res => {
      console.log(res.data)
      this.loadOrders();

    })
  }
  handleCompleteOrder = (id) => {
    console.log(id);
    axios.post("/api/order/POST/" + id, {
      priority: 2,
      inProgress: "Completed"
    }).then(res => {
      console.log(res.data)
      this.loadOrders();

    })
  }
  handleShowSteps = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-6">
              <h1>New Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.newOrders.map((el, i) => <OrderCard obj={el} key={i} clickSteps={(id) => this.handleShowSteps(id)} clickPost={(d) => this.handleStartOrder(d)}></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h1>In Progress Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.inProgressOrders.map((el, i) => <OrderCard obj={el} key={i} clickSteps={(id) => this.handleShowSteps(id)} clickPost={(d) => this.handleCompleteOrder(d)}></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <AddManufacturing steps={this.recipe} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Manufacturing;
