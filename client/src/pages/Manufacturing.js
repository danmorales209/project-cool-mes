import React, { Component } from "react";
import { Button } from 'reactstrap';
import AddManufacturing from "../components/AddManufacturing";
import OrderCard from "../components/OrderCards";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Manufacturing extends Component {
  state = {
    newOrders: [],
    inProgressOrders:[],
    recipe:{},
  };

  // componentDidMount() {
  //   // this.loadBooks();
  // }

  // handleGetOrders = () => {
  //   axios.get("/api/orders", {
  //     activeOrders: this.state.activeOrders,
  //   }).then(res => {
  //     console.log(res.data)
  //   })
  // }

  // handlePostCompleted = () => {
  //   axios.post("/api/Manufacturing/POST", {
  //     name: this.state.materialName,
  //     quantity: this.state.materialQuantity,
  //     units: this.state.materialUnit
  //   }).then(res => {
  //     console.log(res.data)
  //   })
  // }

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
            {this.state.newOrders.map((el, i) => <OrderCard obj={el} key={i}></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <h1>In Progress Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
            {this.state.inProgressOrders.map((el, i) => <OrderCard obj={el} key={i}></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
                <AddManufacturing steps={this.recipe}/>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Button color="success" onClick={this.handlePostCompleted} >Update</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Manufacturing;
