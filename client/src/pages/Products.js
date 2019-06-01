import React, { Component } from "react";
import {
  Button, Form, FormGroup, Label, Input, ListGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table
} from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import ProductCard from "../components/ProductCards";
import ListStuff from "../components/ListStuff";

class Products extends Component {
  state = {
    productName: '',
    description: '',
    currEquip: "",
    currInvent: "",
    openEquip: "",
    openInvent: "",
    directions:"",
    arrayNewEquip: [],
    arrayNewInvent: [],
    allEquipment: [],
    allInventory: [],
    allProducts: [],
    steps: [],
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
      openInvent: !prevState.openInvent
    }));
  };

  toggleEquipment = () => {
    this.setState(prevState => ({
      openEquip: !prevState.openEquip
    }));
  };

  handleAddStep = () => {
    let steps = this.state.steps;
    steps.push({
      directions: "",
      stepInventory: [],
      equipmentType: [],
      duration: 0
    });
    
    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps
      })
    )
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
            {this.state.allProducts.map((data, i) => <Col size="md-3"><ProductCard obj={data} key={i}></ProductCard></Col>)}
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
                  <Input
                    onChange={this.handleInputChange}
                    name="productName"
                    id="productName"
                    placeholder="Add Product Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Add Description</Label>
                  <Input
                    onChange={this.handleInputChange}
                    name="description"
                    id="description"
                    placeholder="Add A Description..."
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="stepsInput">Steps</Label>
                  <br />
                  {this.state.steps.map((el, index) => (
                    <div>
                      <h3>Description</h3>
                      <Input
                        value={this.state.steps[index]}
                        id={index}
                        key={index}
                        name={"directionsInput" + index}
                        placeholder="Directions"
                        onChange={this.handleChange}
                      />
                      <ListGroup>
                        <h5>Added Inventory</h5>
                        <Row>
                          {this.state.arrayNewEquip.map((data, i) => <Col size="md-3"><ListStuff obj={data} key={i}></ListStuff></Col>)}
                        </Row>
                      </ListGroup>
                      <Dropdown isOpen={this.state.openInvent} toggle={this.toggleInventory}>
                        <DropdownToggle caret>Add Ingredients</DropdownToggle>
                        <DropdownMenu>
                          {this.state.allInventory.map((el, i) => (
                            <>
                              <DropdownItem
                                name={el.inventory}
                                key={i}
                                id={el._id}
                                onClick={this.select}
                              >
                                Type: {el.inventory}
                              </DropdownItem>
                              <DropdownItem divider />
                            </>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                      <ListGroup>
                        <h5>Added Equipment</h5>
                        <Row>
                          {this.state.arrayNewInvent.map((data, i) => <Col size="md-3"><ListStuff obj={data} key={i}></ListStuff ></Col>)}
                        </Row>
                      </ListGroup>
                      <Dropdown isOpen={this.state.openEquip} toggle={this.toggleEquipment}>
                        <DropdownToggle caret>Add Equpiment</DropdownToggle>
                        <DropdownMenu>
                          {this.state.allEquipment.map((el, i) => (
                            <>
                              <DropdownItem
                                name={el.equipment.name}
                                key={i}
                                id={el._id}
                                onClick={this.select}
                              >
                                Type: {el.equipment.name}
                              </DropdownItem>
                              <DropdownItem divider />
                            </>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                      <Button id={index} onClick={this.handleDelete}> Remove Step </Button>
                    </div>
                  ))}
                  <Button onClick={this.handleAddStep}>Add Step</Button>
                </FormGroup>
                <Button color="success" onClick={() => { this.handlePostProduct(); this.loadProducts() }}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
