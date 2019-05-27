import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import axios from "axios";
// import AddProductForm from "../components/AddProductForm"
import ProductCard from "../components/ProductCards";

class Products extends Component {
  state = {
    productsArray: [],
    newProduct: "",
    newProductDesc: "",
    steps: [],
    productName: '',
    productDescription: '',
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleAddStep = () => {
    let steps = this.state.steps;
    steps.push("");
    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps
      })
    )
  }
  handleName = (e) => {
    this.setState({ productName: e.target.value })

  }
  handleDescription = (e) => {
    this.setState({ productDescription: e.target.value })

  }
  handleChange = (e) => {
    let steps = this.state.steps;
    let index = e.target.id;
    steps[index] = e.target.value;
    this.setState({ steps: steps })
  }
  handleDelete = (e) => {

    let steps = this.state.steps;
    let id = e.target.id;
    steps = steps.filter((el, index) => index !== +id)

    this.setState({ steps: steps })
  }
  handleSubmit = () => {
    console.log(this.state.steps)
  }
  render() {
    return (
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
                  <CardTitle>New Product Name:</CardTitle>
                  <CardText>New Product Description:</CardText>
                  <CardText>Steps:</CardText>
                  <Button>Create Product</Button>
                </CardBody>
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
              <Form>
                <FormGroup>
                  <Label for="productName">Product Name</Label>
                  <Input onChange={this.handleName} name="productName" id="productName" placeholder="Add product name" />
                </FormGroup>
                <FormGroup>
                  <Label for="productDescription">Add Description</Label>
                  <Input onChange={this.handleDescription} name="productDescription" id="productDescription" placeholder="Add some info..." />
                </FormGroup>
                <FormGroup>
                  <Label for="stepsInput">Steps</Label>
                  <br></br>
                  {this.state.steps.map((el, index) =>
                    <div>
                      <Input
                        value={this.state.steps[index]}
                        id={index}
                        key={index}
                        name={"stepsInput" + index}
                        placeholder="Add step info..."
                        onChange={this.handleChange}>
                      </Input>
                      <Button id={index} onClick={this.handleDelete}>Remove Step</Button>
                    </div>)}
                  <Button onClick={this.handleAddStep}>Add Step</Button>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
