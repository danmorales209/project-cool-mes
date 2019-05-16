import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
<<<<<<< HEAD
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
=======
  CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
>>>>>>> e16bd7615a00f0aaa1642e650eb06da377b26fb9
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import AddProductForm from "../components/AddProductForm"
import ProductCard from "../components/ProductCards";

class Products extends Component {
  state = {
    productsArray: [],
    newProduct: "",
    newProductDesc: "",
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
<<<<<<< HEAD
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add New Product</h1>
              <Card>
                <AddProductForm />
=======
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h1>Current Products</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-3">
              <Card>
                <CardBody>
                  <CardTitle>New Product Name</CardTitle>
                  <CardText>New Description</CardText>
                  <Button>Create Product</Button>
                </CardBody>
>>>>>>> e16bd7615a00f0aaa1642e650eb06da377b26fb9
              </Card>
            </Col>
            <Col size="md-3">
              <ProductCard />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Product Form</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <AddProductForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
