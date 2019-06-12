import React, { Component } from "react";
import ManufacturingCard from "../components/ManufacturingCard/manufacturingCard";
import axios from "axios";
import Slider from "react-slick";
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

  handlePriority = (id, pri, pro) => {
    axios
      .post("/api/order/POST/" + id, {
        priority: pri,
        progress: pro
      })
      .then(res => {
        let recipeId = res.data.product;

        // Check if equipment/inventory is available 
        axios.post("/api/order/CHECK", {
          product: recipeId,
          order: id,
        }).then(res => {
          console.log(res.data, "check")
          this.loadOrders();
        })

      });

  };

  handleShowSteps = id => {
    let step;
    axios.get("/api/order/GET/" + id).then(res => {
      let recipeId = res.data.product
      step = res.data.currentStep;

      axios.get("/api/recipe/GET/" + recipeId).then(res => {

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
    });
    if (increaseSteps === steps) {
      this.handlePriority(orderID, 2, "Completed")
      this.setState({ recipeObj: {} })
      // this.setState({inProgressOrders: []})
      // this.loadOrders();
    } else if (this.state.currentStep < steps) {
      this.setState({ currentStep: this.state.currentStep + 1 })
    }

  };

  render() {
    
    let number;
    
    if (this.state.newOrders.length < 4) {
     number = this.state.newOrders.length; 
    }
    else {
     number = 4; 
    }
    
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: number,
      slidesToScroll: number
    };
    return (

      <div className="container">

        <Container fluid>
          <Row>
            <Col size="md-6">
              <h1>New Orders</h1>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              {this.state.newOrders.length === 0 ? <h3 className="noOrder">No Orders Available</h3> :
                <Slider {...settings}>
                  {this.state.newOrders.map((el, i) => (
                    <div>
                      <ManufacturingCard
                        obj={el}
                        key={i}
                        clickStart={id => this.handlePriority(id, 1, "In Progress")}
                      />
                    </div>
                  ))}
                </Slider>
              }
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              <h1>In Progress Orders</h1>
            </Col>
          </Row>

          <Row>
          <Col size="md-12">
            {this.state.inProgressOrders.length === 0 ? <h3 className="noOrder">No Orders Available</h3> :
              <Slider {...settings}>
                {this.state.inProgressOrders.map((el, i) => (
                  <div>
                    <ManufacturingCard
                      obj={el}
                      key={i}
                      clickSteps={id => this.handleShowSteps(id)}
                    />
                  </div>
                ))}
              </Slider>
            }
            </Col>
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
