import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import InventoryInput from "../components/InventoryInput";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Inventory extends Component {
  state = {
    rawMatInv: [],
    EqupInv: []
  };

  handlePostEquipment() {
    axios.post("/api/inventory/POST", this.state.EqupInv).then(res => {
      console.log(res.data)
    })
  }
  handlePostMaterial() {
    axios.post("/api/inventory/POST", this.state.rawMatInv).then(res => {
      console.log(res.data)
    })
  }
  componentDidMount() {
    // this.loadBooks();
  }
  handleMaterialChange = (e) => {
    this.setState({ rawMatInv: e.target.value })
  }
  handleEquipmentChange = (e) => {
    this.setState({ EqupInv: e.target.value })
  }
  // handleClick = () => {
  //   console.log(this.state)
  // }
  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Raw Materials Inventory</h1>
                <InputGroup>
                  <h2>Item Name </h2>
                  <Input placeholder="value" onChange={this.handleMaterialChange} />
                  <InputGroupAddon addonType="append">
                    <Button color="success" onClick={this.handlePostMaterial} >Update</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>Equipment Inventory</h1>
                <InputGroup>
                  <h2>Item Name </h2>
                  <Input placeholder="value" onChange={this.handleEquipmentChange} />
                  <InputGroupAddon addonType="append">
                    <Button color="success" onClick={this.handlePostEquipment} >Update</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Inventory;
