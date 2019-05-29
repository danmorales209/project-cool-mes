import React, { Component } from "react";
import AddManufacturing from "../components/AddManufacturing";
import OrderCard from "../components/OrderCards";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Manufacturing extends Component {
  state = {
    newOrders: [],
    inProgressOrders:[],
    recipe:{},
  };

  componentDidMount() {
    this.loadOrders();
  }
  loadOrders = () => {
    axios.get("/api/order/GET").then((res) => {
      console.log(res.data)
      this.setState({
        newOrders: res.data.filter(orders => orders.priority ===0),
        inProgressOrders: res.data.filter(orders => orders.priority ===1),
      },
      ()=>{
        console.log(this.state.newOrders, "line 25");
      }
      );
    })
  }

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
          {/* <Row>
            <Col size="md-6">
              <Button color="success" onClick={this.handlePostCompleted} >Update</Button>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}
export default Manufacturing;
