import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import AddProductForm from "../components/AddProductForm"

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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add New Product</h1>
              <Card>
                <AddProductForm />
              </Card>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Products;
