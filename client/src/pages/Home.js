import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Jumbotron
} from "reactstrap";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  state = {
    activeOrders: "",
    inProgressOrders: "",
    completedOrders: "",
    productAInv: "",
    productBInv: "",
    productCInv: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleGetDash = () => {
    axios
      .get("/api/dashboard", {
        activeOrders: this.state.activeOrders,
        inProgressOrders: this.state.inProgressOrders,
        completedOrders: this.state.completedOrders
        //   productAInv: this.state.productAInv,
        //   productBInv: this.state.productBInv,
        //   productCInv: this.state.productCInv
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-8">
              <Row>
                <Col size="md-6">
                  <Card>
                    <CardImg
                      top
                      src="./images/products2.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        <h2>Products</h2>
                      </CardTitle>
                      <CardText>
                        Products, recipes or list a new product.
                      </CardText>
                      <Link to="/products">
                        <Button>Open</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>

                <Col size="md-6">
                  <Card>
                    <CardImg
                      top
                      src="./images/inventory.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        <h2>Monitor Inventory</h2>
                      </CardTitle>
                      <CardText>Equipment and Materials</CardText>
                      <Link to="/inventory">
                        <Button>Open</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                  <Card>
                    <CardImg
                      top
                      src="./images/order.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        <h2>Orders</h2>
                      </CardTitle>
                      <CardText>Orders Past and Orders Present</CardText>
                      <Link to="/orders">
                        <Button>Open</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
                <Col size="md-6">
                  <Card>
                    <CardImg
                      top
                      src="./images/manufacturing.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        <h2>Manufacturing</h2>
                      </CardTitle>
                      <CardText>Ready to go into production?</CardText>
                      <Link to="/manufacturing">
                        <Button>Open</Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col size="md-4">
              <Jumbotron>
                <h2>Dashboard</h2>
                <h6>ORDERS</h6>
                <p>Active: 3</p>
                <p>In Progress: 1</p>
                <p>Completed: 10</p>
                <h6>ALERTS</h6>
                <h7>Inventory Notifications: </h7>
                <p className="Low">Flour Low Stock</p>
                <p className="Low">Sugar Low Stock</p>
                <p className="Out">Nails Out of Stock</p>
                <p className="Out">Paper Out of Stock</p>
                <p />
                <h7>Equipment Notifications: </h7>
                <p className="Out">No available mixers</p>
                <p className="Out">No available ovens</p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
