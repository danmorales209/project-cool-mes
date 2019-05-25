import React, { Component } from "react";
import {
  Card, CardText, CardBody, CardTitle, Button
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import OrderCard from "../components/OrderCards";
import AddOrderForm from "../components/AddOrderForm";

class Orders extends Component {
  state = {
    activeOrders: [],
    queuedOrders: [],
    completedOrders: [],
    productName: "",
    unitsNeeded: "",
    unitsAvailable: "",
    addUnitsNeeded: "",
    dueDate: "",
    customerName: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  };

  componentDidMount() {
    this.loadOrders();
  }

  handlePostOrder = () => {
    axios.post("/api/orders/POST", {
      productName: this.state.productName,
      unitsNeeded: this.state.unitsNeeded,
      unitsAvailable: this.state.unitsAvailable,
      addUnitsNeeded: this.state.addUnitsNeeded,
      dueDate: this.state.dueDate,
      customerName: this.state.customerName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }).then(res => {
      console.log(res.data);
      let newArr = this.state.orderObj;
      newArr.push(res.data);
      this.setState({ orderObj: newArr });
    })
  }
  loadOrders = () => {
    axios.get("/api/orders/GET").then((res) => {
      this.setState({
        activeOrders: res.data,
        queuedOrders: res.data,
        completedOrders: res.data,
      });
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="container">
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
              {this.state.activeOrders.map((el, i) => <OrderCard obj={el} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Queued Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.queuedOrders.map((el, i) => <OrderCard obj={el} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Completed Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.completedOrders.map((el, i) => <OrderCard obj={el} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Order Form</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <AddOrderForm onChange={n => this.setState({productName: n})}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Orders;
