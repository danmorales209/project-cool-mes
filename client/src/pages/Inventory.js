import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


class Inventory extends Component {
  state = {
    materialName: '',
    materialQuantity: '',
    materialUnit: '',
    equipmentName: '',
    equipmentType: '',
  };

  handlePostMaterial = () => {
    axios.post("/api/inventory/POST", {
      name: this.state.materialName,
      quantity: this.state.materialQuantity,
      unit: this.state.materialUnit
    }).then(res => {
      console.log(res.data)
    })
  }
  handlePostEquipment() {
    axios.post("/api/equipment/POST", this.state.EqupInv).then(res => {
      console.log(res.data)
    })
  }
  componentDidMount() {
    // this.loadBooks();
  }
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Raw Materials Inventory</h1>
                <InputGroup>
                  <h2>Material Name</h2>
                  <Input
                    placeholder="name"
                    name="materialName"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <h2>Amount of Material</h2>
                  <Input
                    placeholder="quantity"
                    name="materialQuantity"
                    type="number"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <h2>Unit of Measure</h2>
                  <Input
                    placeholder="units"
                    name="materialUnit"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <Button color="success" onClick={this.handlePostMaterial} >Update</Button>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Equipment Inventory</h1>
                <InputGroup>
                  <h2>Equipment Name </h2>
                  <Input
                    placeholder="name"
                    name="equipmentName"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <h2>Equipment Type </h2>
                  <Input
                    placeholder="type"
                    name="equipmentType"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <Button color="success" onClick={this.handlePostEquipment} >Update</Button>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Inventory;
