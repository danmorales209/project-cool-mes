import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import { InputGroup, Input, Button } from 'reactstrap';

import axios from "axios";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import MaterialCard from "../components/MaterialResponse/index";
import EquipmentCard from "../components/EquipmentResponse/index"


class Inventory extends Component {
  state = {
    materialName: '',
    materialQuantity: '',
    materialUnit: '',
    equipmentName: '',
    equipmentType: '',
    materailObj: [],
    equipmentObj: [],
  };

  handlePostMaterial = () => {
    axios.post("/api/inventory/POST", {
      name: this.state.materialName,
      quantity: this.state.materialQuantity,
      units: this.state.materialUnit
    }).then(res => {
      console.log(res.data);
      let newArr = this.state.materailObj;
      newArr.push(res.data);
      this.setState({ materailObj: newArr });
    })
  }
  loadMaterial = () => {
    axios.get("/api/inventory/GET").then((res) => {
      this.setState({ materailObj: res.data });
    })
  }
  loadEquipment = () => {
    axios.get("/api/equipment/GET").then((res) => {
      this.setState({ equipmentObj: res.data });
    })
  }
  handlePostEquipment = () => {
    axios.post("/api/equipment/POST", {
      name: this.state.equipmentName,
      equipmentType: this.state.equipmentType
    }).then(res => {
      console.log(res.data)
      let newArr = this.state.equipmentObj;
      newArr.push(res.data);
      this.setState({ equipmentObj: newArr });
    })
  }
  componentDidMount() {
    this.loadMaterial();
    this.loadEquipment();
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
                <h1 >Raw Materials Inventory</h1>
                <InputGroup className="p-2">
                  <h2 className="p-1">Material Name </h2>
                  <Input
                    placeholder="name"
                    name="materialName"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup className="p-2">
                  <h2 className="p-1">Amount of Material </h2>
                  <Input
                    placeholder="quantity"
                    name="materialQuantity"
                    type="number"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup className="p-2">
                  <h2 className="p-1">Unit of Measure </h2>
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
            <Col size="md-6">
              <Jumbotron>
                <h1>Equipment Inventory</h1>
                <InputGroup className="p-2">
                  <h2 className="p-1">Equipment Name </h2>
                  <Input
                    placeholder="name"
                    name="equipmentName"
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup className="p-2">
                  <h2 className="p-1">Equipment Type </h2>
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
          <Row>
            <Col size="md-6">
              <Jumbotron>
              <MaterialCard obj={this.state.materailObj}/>
              </Jumbotron>
            </Col>
            <Col size="md-6">
              <Jumbotron>
              {this.state.equipmentObj.map((el, i) => <EquipmentCard obj={el} key={i} ></EquipmentCard>)}
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Inventory;
