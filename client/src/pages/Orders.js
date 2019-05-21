import React, { Component } from "react";
import {
  Card, CardText, CardBody,
  CardTitle, Button
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
    productName:"",
    unitsNeeded:"",
    unitsAvailable:"",
    addUnitsNeeded:"",
    dueDate:"",
    customerName:"",
    address:"",
    city:"",
    state:"",
    zip:""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // handlePostMaterial = () => {
  //   axios.post("/api/orders/POST", {
  //     productName:productName,
  //     unitsNeeded:unitsNeeded,
  //     unitsAvailable:unitsAvailable,
  //     addUnitsNeeded:addUnitsNeeded,
  //     dueDate:dueDate,
  //     customerName:customerName,
  //     address:address,
  //     address2:address2,
  //     city:city,
  //     state:state,
  //     zip:zip
  //   }).then(res => {
  //     console.log(res.data);
  //     let newArr = this.state.orderObj;
  //     newArr.push(res.data);
  //     this.setState({ orderObj: newArr });
  //   })
  // }
  loadMaterial = () => {
    axios.get("/api/orders/GET").then((res) => {
      this.setState({ orders: res.data });
    })
  }

  render() {
    return (
      <div className="container">dxk
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
              <AddOrderForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Orders;
