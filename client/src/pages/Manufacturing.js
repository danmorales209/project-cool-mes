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
    currentStep: 0,
    currentOrderId: "",
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
        // console.log(res.data);
        this.loadOrders();
      });

  };

  handleShowSteps = id => {
    let step;
    axios.get("/api/order/GET/" + id).then(res => {
      // console.log(res.data)
      step = res.data.currentStep;
      axios.get("/api/recipe/GET/" + res.data.product).then(res => {
        // console.log(res);
        this.setState({ recipeObj: res.data, currentStep: step, currentOrderId: id });
      })
    });
  };

  handleNextStep = id => {
    let steps = this.state.recipeObj.steps.length;
    let increaseSteps = this.state.currentStep + 1;
    let orderID = this.state.currentOrderId;
    axios.put("/api/order/PUT/" + orderID, {
      step: increaseSteps
    }).then(res => {
      console.log(res)
    })

    if (this.state.currentStep < steps) {
      this.setState({ currentStep: this.state.currentStep + 1 })
    }
    else {
      alert("all Done");
    }
    console.log("increase step", increaseSteps, "id", id, "state current step", this.state.currentStep)

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
            {this.state.newOrders.length === 0 ? <h3 className="noOrder">No Orders Available</h3> :
              this.state.newOrders.map((el, i) => (
                <Col size="md-3">
                  <ManufacturingCard
                    obj={el}
                    key={i}
                    clickStart={id => this.handleStartOrder(id)}

                  />
                </Col>
              ))}
          </Row>

          <Row>
            <Col size="md-6">
              <h1>In Progress Orders</h1>
            </Col>
          </Row>

          <Row>
            {this.state.inProgressOrders.length === 0 ? <h3 className="noOrder">No Orders Available</h3> :
              this.state.inProgressOrders.map((el, i) => (
                <Col size="md-3">
                  <ManufacturingCard
                    obj={el}
                    key={i}
                    clickSteps={id => this.handleShowSteps(id)}
                  />
                </Col>
              ))
            }
          </Row>

          <Row>
            <Col size="md-6">
              {
                Object.keys(this.state.recipeObj).length === 0 ? <></> :
                  <RecipeSteps
                    obj={this.state.recipeObj}
                    nextStep={(id) => this.handleNextStep(id)}
                    currentStep={this.state.currentStep}
                    orderObj={this.state.inProgressOrders}
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
