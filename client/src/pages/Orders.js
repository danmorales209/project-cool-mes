import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import OrderCard from "../components/OrderCards";
import { Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Orders extends React.Component {
  state = {
    newOrders: [],
    inProgressOrders: [],
    completedOrders: [],
    productName: "",
    qtyNeeded: "",
    dueDate: "",
    customerName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    products:[]
  };

  componentDidMount() {
    this.loadOrders();
  }

  // handleOrderOpen= () =>

  handlePostOrder = () => {
    axios.post("/api/order/POST", {
      productName: this.state.productName,
      dueDate: this.state.dueDate,
      qtyNeeded: this.state.qtyNeeded,
      customer: {
        name: this.state.customerName,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
    }).then(res => {
      console.log(res.data);
      let newArr = this.state.orderObj;
      newArr.push(res.data);
      this.setState({ orderObj: newArr });
    })
  }
  loadProducts = () => {
    axios.get("/api/recipe/GET").then((res) => {
      this.setState({
        products:res.data
      });
    })
  }
  loadOrders = () => {
    axios.get("/api/order/GET").then((res) => {
      this.setState({
        newOrders: res.data,
        inProgressOrders: res.data,
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
              {this.state.newOrders.map((data, i) => <OrderCard obj={data} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Queued Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.inProgressOrders.map((data, i) => <OrderCard obj={data} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Completed Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              {this.state.completedOrders.map((data, i) => <OrderCard obj={data} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Order Form</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Form>
                <FormGroup>
                  <Label for="productName">Product Name</Label>
                  <Input type="" name="productName" id="productName" value={this.state.productName} onChange={this.handleInputChange} placeholder="Product Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="unitsNeeded">Total Units Needed</Label>
                  <Input type="" name="qtyNeeded" id="qtyNeeded" value={this.state.qtyNeeded} onChange={this.handleInputChange} placeholder="Total Units Needed" />
                </FormGroup>
                <FormGroup>
                  <Label for="dueDate">Due Date</Label>
                  <Input type="" name="dueDate" id="dueDate" value={this.state.dueDate} onChange={this.handleInputChange} placeholder="Due Date" />
                </FormGroup>
                <FormGroup>
                  <Label for="customerName">Customer Name</Label>
                  <Input type="text" name="customerName" id="customerName" value={this.state.customerName} onChange={this.handleInputChange} placeholder="Jane Doe" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} placeholder="1234 Main St" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} id="exampleState" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" value={this.state.zip} onChange={this.handleInputChange} id="exampleZip" />
                </FormGroup>
                <Button color="success" onClick={this.handlePostOrder}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Orders;
