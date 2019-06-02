import React, { Component } from "react";
import ManufacturingCard from "../components/ManufacturingCard/manufacturingCard";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import RecipeSteps from "../components/RecipeSteps/index";

class Manufacturing extends Component {
  state = {
    newOrders: [],
    inProgressOrders: [],
    // recipe: {},
    recipeObj: ""
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = () => {
    axios.get("/api/order/GET").then(res => {
      console.log(res.data, "line 19");
      this.setState({
        newOrders: res.data.filter(orders => orders.priority === 0),
        inProgressOrders: res.data.filter(orders => orders.priority === 1)
      });
    });
  };

  handleStartOrder = id => {
    axios
      .post("/api/order/POST/" + id, {
        priority: 1,
        inProgress: "In Progress"
      })
      .then(res => {
        console.log(res.data);
        this.loadOrders();
      });
  };

  handleCompleteOrder = id => {
    console.log(id);
    axios
      .post("/api/order/POST/" + id, {
        priority: 2,
        inProgress: "Completed"
      })
      .then(res => {
        console.log(res.data);
        this.loadOrders();
      });
  };

  handleShowSteps = id => {
    //this.setState({ recipeObj: {} })
    axios.get("/api/order/GET/" + id).then(res => {
      axios.get("/api/recipe/GET/" + res.data.product).then(res => {
        this.setState({ recipeObj: res.data });
        console.log(this.state.recipeObj, "recipe object");
      });
    });
  };

  handleDelete = e => {
    let steps = this.state.recipeObj.steps;
    console.log(steps);
    let index = e.target.index;
    steps.splice(index, 1);
    this.setState({ steps: steps });
    console.log(steps);
  };

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
              {this.state.newOrders.map((el, i) => (
                <ManufacturingCard
                  obj={el}
                  key={i}
                  clickSteps={id => this.handleShowSteps(id)}
                  clickPost={d => this.handleStartOrder(d)}
                />
              ))}
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              <h1>In Progress Orders</h1>
            </Col>
          </Row>

          <Row>
            <Col size="md-3">
              {this.state.inProgressOrders.map((el, i) => (
                <ManufacturingCard
                  obj={el}
                  key={i}
                  clickSteps={id => this.handleShowSteps(id)}
                  clickPost={d => this.handleCompleteOrder(d)}
                />
              ))}
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              {this.state.recipeObj === "" ? (
                "empty"
              ) : (
                <RecipeSteps
                  obj={this.state.recipeObj}
                  handleDelete={this.handleDelete}
                />
              )}
            </Col>
          </Row>

        </Container>

      </div>
    );
  }
}
export default Manufacturing;
