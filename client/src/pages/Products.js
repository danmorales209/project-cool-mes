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
    // currEquip: "",
    // currInvent: "",
    duration: "",
    quantity: "",
    openEquip: "",
    openInvent: "",
    directions: "",
    arrayNewEquip: [],
    arrayNewIngred: [],
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

  // pushEquip = (e) => {
  //     this.setState({ arrayNewEquip:  })
  // }

  // pushIngred = (e) => {
  //     this.setState({ arrayNewIngred:  })
  // }

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
          <Form>
            <Row>
              <Col size="md-6">
                <h3>Product Name</h3>
              </Col>
              <Col size="md-6">
                <h3>Description</h3>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    name="productName"
                    id="productName"
                    placeholder="Add Product Name"
                  />
                </FormGroup>
              </Col>
              <Col size="md-6">
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    name="description"
                    id="description"
                    placeholder="Add A Description..."
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              {<div>
                <Row>
                  <h3>Directions</h3>
                  <Input
                    value={this.state.steps[index]}
                    id={index}
                    key={index}
                    name={"directionsInput" + index}
                    placeholder="Directions"
                    onChange={this.handleChange}
                  />
                </Row>
                <ListGroup>
                  <h3>Added Inventory</h3>
                  <Row>
                    {this.state.arrayNewEquip.map((data, i) => <Col size="md-3"><ListStuff obj={data} key={i}></ListStuff></Col>)}
                  </Row>
                </ListGroup>
                <Row>
                  <Col size="md-2">
                    <Dropdown className="moveDown longer" isOpen={this.state.openIngred} toggle={this.toggleInventory}>
                      <DropdownToggle caret>Add Ingredients</DropdownToggle>
                      <DropdownMenu>
                        {this.state.allInventory.map((el, i) => (
                          <>
                            <DropdownItem
                              name={el.name}
                              key={i}
                              id={el._id}
                              onClick={this.select}
                            >
                              Type: {el.name}
                            </DropdownItem>
                            <DropdownItem divider />
                          </>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                    {/* <Button color="success" onClick={() => { this.pushInvent }}></Button> */}
                    this.pushInvent()
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
                <ListGroup>
                  <Row>
                    <Col size="md-4">
                      <h3>Added Equipment</h3>
                    </Col>
                    <Col size="md-3">
                      <h3>Step Duration</h3>
                    </Col>
                  </Row>
                  <Row>
                    {this.state.arrayNewIngred.map((data, i) => <Col size="md-3"><ListStuff obj={data} key={i}></ListStuff ></Col>)}
                  </Row>
                </ListGroup>
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
                              onClick={() => { this.select(); this.pushEquip() }}
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
                <Button id={index} onClick={this.handleDelete}> Remove Step </Button>
              </div>}
              <Button onClick={this.handleAddStep}>Add Step</Button>
            </FormGroup>
            <Button color="success" onClick={() => { this.handlePostProduct(); this.loadProducts() }}>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Products;
