import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import InventoryInput from "../components/InventoryInput";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Inventory extends Component {
  state = {
    rawMatInv: [],
    EqupInv: []
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Raw Materials Inventory</h1>
                <InventoryInput>
                </InventoryInput>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Equipment Inventory</h1>
                <InventoryInput>
                </InventoryInput>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Inventory;
