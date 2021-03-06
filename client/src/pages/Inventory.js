import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { InputGroup, Input, Button } from "reactstrap";

import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import MaterialCard from "../components/MaterialResponse/index";
import EquipmentCard from "../components/EquipmentResponse/index";

class Inventory extends Component {
  state = {
    materialName: "",
    materialQuantity: "",
    materialUnit: "",
    equipmentName: "",
    equipmentType: "",
    materailObj: [],
    equipmentObj: []
  };

  handlePostMaterial = () => {
    axios
      .post("/api/inventory/POST", {
        name: this.state.materialName,
        quantity: this.state.materialQuantity,
        units: this.state.materialUnit
      })
      .then(res => {
        this.setState({ materailObj: [...this.state.materailObj, res.data] });
      });
  };

  loadMaterial = () => {
    axios.get("/api/inventory/GET").then(res => {
      this.setState({ materailObj: res.data });
    });
  };

  loadEquipment = () => {
    axios.get("/api/equipment/GET").then(res => {
      this.setState({ equipmentObj: res.data });
    });
  };
  handlePostEquipment = () => {
    axios
      .post("/api/equipment/POST", {
        equipmentType: this.state.equipmentType,

        name: this.state.equipmentName
      })
      .then(res => {
        let newArr = this.state.equipmentObj;
        newArr.push(res.data);
        this.setState({ equipmentObj: newArr });
      });
  };

  componentDidMount() {
    this.loadMaterial();
    this.loadEquipment();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  increaseMaterial = id => {
    let quantity = Object.entries(this.state).filter(e => e[0] === id)[0][1];

    axios
      .post("/api/inventory/POST/" + id, { quantity: quantity })
      .then(res => {
        console.log(res);
        this.loadMaterial();
        this.setState({ id: "" });

        document.querySelector(`input[name="${id}"]`).value = "";
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Container fluid>
          <Row>
            {/* Material Inventory */}
            <Col size="md-6">
              <Jumbotron>
                <h1>Raw Materials Inventory</h1>
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

                <Button
                  color="success"
                  onClick={this.handlePostMaterial}
                  disabled={
                    this.state.materialName === "" ||
                    this.state.materialQuantity === "" ||
                    this.state.materialUnit === ""
                      ? true
                      : false
                  }
                >
                  Update
                </Button>
              </Jumbotron>
            </Col>

            <Col size="md-6">
              {/* Equipment Inventory */}
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

                <Button
                  color="success"
                  onClick={this.handlePostEquipment}
                  disabled={
                    this.state.equipmentName === "" ||
                    this.state.equipmentType === ""
                      ? true
                      : false
                  }
                >
                  Update
                </Button>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-8">
              <Jumbotron>
                <MaterialCard
                  obj={this.state.materailObj}
                  increaseBtn={this.increaseMaterial}
                  onChange={this.handleInputChange}
                  value={this.state._id}
                />
              </Jumbotron>
            </Col>
            <Col size="md-4">
              <Jumbotron>
                <EquipmentCard equipmentObj={this.state.equipmentObj} />
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Inventory;
