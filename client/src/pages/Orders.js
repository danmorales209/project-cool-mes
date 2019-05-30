import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import OrderCard from "../components/OrderCards";
import { Card, CardText, CardBody, CardTitle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input } from 'reactstrap';

class Orders extends React.Component {
  state = {
    newOrders: [],
    inProgressOrders: [],
    completedOrders: [],
    product: "",
    productName: "0000",
    priority: "",
    qtyNeeded: "",
    dueDate: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    products: []
  };

  componentDidMount() {
    this.loadOrders();
    this.loadProducts();
  }

  // handleOrderOpen= () =>

  handlePostOrder = () => {
    axios.post("/api/order/POST", {
      product: this.state.product,
      productName: this.state.productName,
      dueDate: this.state.dueDate,
      qtyNeeded: this.state.qtyNeeded,
      priority: this.state.priority,
      customer: {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
    }).then(res => {
      console.log(res);
      this.loadOrders()
    })
  }
  loadProducts = () => {
    axios.get("/api/recipe/GET").then((res) => {
      this.setState({
        products: res.data
      });
    })
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

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleProductName = (d) => {
    console.log(d)
    
    this.setState({ productName:  d})
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
            {this.state.newOrders.map((data, i) => <Col size="md-3"><OrderCard obj={data} key={i}></OrderCard></Col>)}
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Queued Orders</h1>
            </Col>
          </Row>
          <Row>
            {this.state.inProgressOrders.map((data, i) => <Col size="md-3"><OrderCard obj={data} key={i}></OrderCard></Col>)}
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Completed Orders</h1>
            </Col>
          </Row>
          <Row>
            {this.state.completedOrders.map((data, i) => <Col size="md-3"><OrderCard obj={data} key={i}></OrderCard></Col>)}
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Order Form</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Form>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Choose a Product
                    </DropdownToggle>
                  <DropdownMenu>
                    {this.state.products.map((el, i) =>
                      <>
                        <DropdownItem
                          onClick={(e) => { this.handleInputChange(e); this.handleProductName(el.name) }}
                          value={el._id}
                          name="product"
                        >
                          Product Name: {el.name}
                        </DropdownItem>
                        <DropdownItem divider />
                      </>
                    )}
                  </DropdownMenu>
                </Dropdown>
                <FormGroup>
                  <Label for="unitsNeeded">Total Units Needed</Label>
                  <Input type="" name="qtyNeeded" id="qtyNeeded" value={this.state.qtyNeeded} onChange={this.handleInputChange} placeholder="Total Units Needed" />
                </FormGroup>
                <FormGroup>
                  <Label for="priority">Priority Level</Label>
                  <Input type="" name="priority" id="priority" value={this.state.priority} onChange={this.handleInputChange} placeholder="0,1,or 2" />
                </FormGroup>
                <FormGroup>
                  <Label for="dueDate">Due Date</Label>
                  <Input type="" name="dueDate" id="dueDate" value={this.state.dueDate} onChange={this.handleInputChange} placeholder="Due Date" />
                </FormGroup>
                <FormGroup>
                  <Label for="customerName">Customer Name</Label>
                  <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Jane Doe" />
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
                <Button color="success" onSubmit={this.loadOrders} onClick={this.handlePostOrder}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Orders;
