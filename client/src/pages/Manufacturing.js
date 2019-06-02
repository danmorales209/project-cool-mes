import React, { Component } from "react";
import ManufacturingCard from "../components/ManufacturingCard/manufacturingCard";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import RecipeSteps from "../components/RecipeSteps/index";

class Manufacturing extends Component {
  state = {
    newOrders: [],
    inProgressOrders: [],
    recipeObj: {},
    currentStep: 0
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = () => {
    axios.get("/api/order/GET").then(res => {
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

  handleShowSteps = id => {
    let step;
    axios.get("/api/order/GET/" + id).then(res => {
      console.log(res.data)
      step = res.data.currentStep;
      axios.get("/api/recipe/GET/" + res.data.product).then(res => {
        this.setState({ recipeObj: res.data, currentStep: step }, () => {
          console.log(this.state.currentStep)
        });
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
                  index={i}
                  clickSteps={id => this.handleShowSteps(id)}
                //clickPost={d => this.handleStartOrder(d)}
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
                //clickPost={d => this.handleCompleteOrder(d)}
                />
              ))}
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              {
                Object.keys(this.state.recipeObj).length === 0 ? <></> :
                  <RecipeSteps
                    obj={this.state.recipeObj}
                    handleDelete={this.handleDelete}
                    currentStep={this.state.currentStep}
                  />
              }
            </Col>
          </Row>

        </Container>

      </div>
    );
  }
}
export default Manufacturing;
