import React, { Component } from "react";
import {
  Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import ProductCard from "../components/ProductCards";
import ListStuff from "../components/ListStuff";

class Products extends Component {
  state = {
    productName: '',
    description: '',
    yield: "",

    steps: [],
    duration: "",
    directions: "",
    equipmentType: [],
    stepInventory: [],

    ingredient: "",
    quantity: "",
    ingredAndQuant: {},

    equipment: {},

    openEquip: "",
    openIngred: "",
    allEquipment: [],
    allInventory: [],
    allProducts: [],
  };

  // handlePostProduct = () => {
  //   axios.post("/api/recipe/POST", {

  //   }).then(res => {
  //     this.setState({

  //     })
  //   })
  // }

  componentDidMount() {
    this.loadEquipment();
    this.loadInventory();
    this.loadProducts();
  }

  loadEquipment = () => {
    axios.get("/api/equipment/GET").then(res => {
      this.setState({ allEquipment: res.data });
    });
  }

  loadInventory = () => {
    axios.get("/api/inventory/GET").then(res => {
      this.setState({ allInventory: res.data });
    });
  }

  loadProducts = () => {
    axios.get("/api/recipe/GET").then((res) => {
      this.setState({ allProducts: res.data });
    })
  }

  toggleInventory = () => {
    this.setState(prevState => ({
      openIngred: !prevState.openIngred
    }));
  };

  toggleEquipment = () => {
    this.setState(prevState => ({
      openEquip: !prevState.openEquip
    }));
  };

  handleNextStep = () => {
    let steps = this.state.steps;
    steps.push({
      directions: this.state.directions,
      stepInventory: this.state.stepInventory,
      equipmentType: this.state.equipmentType,
      duration: this.state.duration,
    });
    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps
      })
    )
  }

  pushEquip = (e) => {
    this.setState({
      equipmentType: [...this.state.equipmentType, e.target.id],
    })
  }

  pushIngred = () => {

  }

  changeValueIngred = (e) => {
    this.setState({ ingredient: e.target.id })
  }

  changeValueEquip = (e) => {
    this.setState({ equipment: e.target.id })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
            {this.state.allProducts.map((data, i) => <Col size="md-3"><ProductCard obj={data} key={i}></ProductCard></Col>)}
          </Row>
          <Row>
            <Col size="md-12">
              <h1>Product Form</h1>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col size="md-4">
                <h3>Product Name</h3>
              </Col>
              <Col size="md-4">
                <h3>Description</h3>
              </Col>
              <Col size="md-4">
                <h3>Yield</h3>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    name="productName"
                    id="productName"
                    placeholder="Add Product Name"
                  />
                </FormGroup>
              </Col>
              <Col size="md-4">
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    name="description"
                    id="description"
                    placeholder="Add A Description"
                  />
                </FormGroup>
              </Col>
              <Col size="md-4">
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    name="yield"
                    id="yield"
                    placeholder="Yield"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              {<div>
                <Row>
                  <h3>Directions</h3>
                  <Input
                    id="directions"
                    name="directions"
                    placeholder="Directions"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <ListGroup>
                  <h3>Added Inventory</h3>
                  <Row>
                    {this.state.equipmentType.map((data, i) => <Col size="md-3"><ListStuff obj={data} key={i}></ListStuff ></Col>)}
                  </Row>
                </ListGroup>
                <Row>
                  <Col size="md-2">
                    <Dropdown className="moveDown" isOpen={this.state.openIngred} toggle={this.toggleInventory}>
                      <DropdownToggle caret>Add Ingredients</DropdownToggle>
                      <DropdownMenu>
                        {this.state.allInventory.map((el, i) => (
                          <>
                            <DropdownItem
                              name={el.name}
                              key={i}
                              index={i}
                              id={el._id}
                              onClick={this.changeValueIngred}
                            >
                              Type: {el.name}
                            </DropdownItem>
                            <DropdownItem divider />
                          </>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                    <Button color="success" onClick={this.pushIngred}>Add Ingredient and Quantity</Button>
                  </Col>
                  <Col size="sm-1">
                    <h1 className="moveDown">X</h1>
                  </Col>
                  <Col size="md-6">
                    <Form>
                      <FormGroup>
                        <Label for="quantity"></Label>
                        <Input
                          onChange={this.handleInputChange}
                          name="quantity"
                          id="quantity"
                          placeholder="Quantity"
                        />
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <h3>Added Equipment</h3>
                  </Col>
                  <Col size="md-3">
                    <h3>Step Duration</h3>
                  </Col>
                </Row>
                <Row>
                  <ListGroup>
                    {this.state.equipmentType.map((data, i) => <ListGroupItem obj={data} key={i}>{this.state.allEquipment.find(equip=>this.obj)}</ListGroupItem>)}
                  </ListGroup>
                </Row>
                <Row>
                  <Col size="md-4">
                    <Dropdown className="longer" isOpen={this.state.openEquip} toggle={this.toggleEquipment}>
                      <DropdownToggle caret>Add Equpiment</DropdownToggle>
                      <DropdownMenu>
                        {this.state.allEquipment.map((el, i) => (
                          <>
                            <DropdownItem
                              name={el.equipmentType}
                              key={i}
                              id={el._id}
                              onClick={(e) => { this.changeValueEquip(e); this.pushEquip(e) }}
                            >
                              Type: {el.equipmentType}
                            </DropdownItem>
                            <DropdownItem divider />
                          </>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                  <Col size="md-3">
                    <FormGroup>
                      <Input
                        onChange={this.handleInputChange}
                        name="duration"
                        id="duration"
                        placeholder="Step Duration"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button onClick={this.handleNextStep}>Next Step</Button>
              </div>}
            </FormGroup>
            <Button color="success" onClick={() => { this.handlePostProduct(); this.loadProducts() }}>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Products;
