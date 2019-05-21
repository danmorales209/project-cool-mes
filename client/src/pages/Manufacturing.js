import React, { Component } from "react";
import { Button } from 'reactstrap';
import AddManufacturing from "../components/AddManufacturing";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Manufacturing extends Component {
  state = {
    activeOrders: [],

  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleGetOrders = () => {
    axios.get("/api/orders", {
      activeOrders: this.state.activeOrders,
    }).then(res => {
      console.log(res.data)
    })
  }

  handlePostCompleted = () => {
    axios.post("/api/Manufacturing/POST", {
      name: this.state.materialName,
      quantity: this.state.materialQuantity,
      units: this.state.materialUnit
    }).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-6">
              <h1>Incomplete Orders</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
            {this.state.activeOrders.map((el, i) => <OrderCard obj={el} key={i} ></OrderCard>)}
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
                <AddManufacturing>
                  
                </AddManufacturing>
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
