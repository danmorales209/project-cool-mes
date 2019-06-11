import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import Slider from "react-slick";
import ProductCard from "../components/ProductCards";
import ListStuff from "../components/ListStuff";

class Products extends Component {
  state = {
    productName: "",
    description: "",
    yield: "",
    steps: [],

    duration: "",
    directions: "",
    equipmentType: [],
    stepInventory: [],

    ingredientID: "",
    ingredientName: "",
    quantity: "",
    ingredAndQuant: {},

    equipmentID: "",
    equipmentName: "",

    renderEquipArray: [],
    renderIngredArray: [],
    openEquip: "",
    openIngred: "",
    allEquipment: [],
    allInventory: [],
    allProducts: []
  };

  handlePostProduct = () => {
    this.handleNextStep();
    axios
      .post("/api/recipe/POST", {
        name: this.state.productName,
        description: this.state.description,
        steps: this.state.steps,
        yield: this.state.yield
      })
      .then(res => {
        this.setState({
          productName: "",
          description: "",
          yield: "",
          steps: []
        });
      });
  };

  componentDidMount() {
    this.loadEquipment();
    this.loadInventory();
    this.loadProducts();
  }

  loadEquipment = () => {
    axios.get("/api/equipment/GET").then(res => {
      this.setState({ allEquipment: res.data });
    });
  };

  loadInventory = () => {
    axios.get("/api/inventory/GET").then(res => {
      this.setState({ allInventory: res.data });
    });
  };

  loadProducts = () => {
    axios.get("/api/recipe/GET").then(res => {
      this.setState({ allProducts: res.data });
    });
  };

  handleDeleteRecipe = id => {
    axios.post("/api/recipe/DELETE/" + id).then(res => {
      this.loadProducts();
    });
  };

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
      duration: this.state.duration
    });

    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps,
        duration: "",
        directions: "",
        equipmentType: [],
        stepInventory: [],

        ingredientID: "",
        ingredientName: "",
        quantity: "",
        ingredAndQuant: {},

        equipmentID: "",
        equipmentName: "",

        renderEquipArray: [],
        renderIngredArray: []
      })
    );
  };

  renderEquip = e => {
    this.setState({
      renderEquipArray: [
        ...this.state.renderEquipArray,
        this.state.equipmentName
      ],
      equipmentType: [...this.state.equipmentType, this.state.equipmentID]
    });
  };

  changeValueEquip = e => {
    this.setState(
      {
        equipmentID: e.target.id,
        equipmentName: e.target.name
      },
      this.renderEquip
    );
  };

  pushIngred = () => {
    var ingredAndQuant = {
      ingredientID: this.state.ingredientID,
      quantity: this.state.quantity
    };
    this.setState({
      stepInventory: [...this.state.stepInventory, ingredAndQuant]
    });
  };

  changeValueIngred = e => {
    this.setState({
      ingredientID: e.target.id,
      ingredientName: e.target.name
    });
  };

  renderIngred = () => {
    var renderIngred = {
      ingredientName: this.state.ingredientName,
      quantity: this.state.quantity
    };
    this.setState({
      renderIngredArray: [...this.state.renderIngredArray, renderIngred]
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="container">
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h3>Current Products</h3>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Slider {...settings}>
                {this.state.allProducts.map((data, i) => (
                  <div>
                    <ProductCard
                      delete={id => this.handleDeleteRecipe(id)}
                      obj={data}
                      key={i}
                    />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <h3>Product Form</h3>
            </Col>
          </Row>

          <Row>
            <Col size="md-5">
              <h5>Product Name</h5>

              <FormGroup>
                <Input
                  onChange={this.handleInputChange}
                  name="productName"
                  id="productName"
                  placeholder="Add Product Name"
                />
              </FormGroup>

              <h5>Description</h5>

              <FormGroup>
                <Input
                  onChange={this.handleInputChange}
                  name="description"
                  id="description"
                  placeholder="Add A Description"
                />
              </FormGroup>

              <h5>Yield</h5>

              <FormGroup>
                <Input
                  onChange={this.handleInputChange}
                  name="yield"
                  id="yield"
                  placeholder="Yield"
                />
              </FormGroup>

              <FormGroup>
                {
                  <div>
                    <h5>Directions</h5>
                    <Input
                      id="directions"
                      name="directions"
                      placeholder="Directions"
                      onChange={this.handleInputChange}
                    />

                    <h5>Added Inventory</h5>

                    <ListGroup>
                      {this.state.renderIngredArray.map((data, i) => (
                        <ListStuff obj={data} key={i} />
                      ))}
                    </ListGroup>

                    <Dropdown
                      className="moveDown"
                      isOpen={this.state.openIngred}
                      toggle={this.toggleInventory}
                    >
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

                    <Button
                      color="success"
                      onClick={() => {
                        this.pushIngred();
                        this.renderIngred();
                      }}
                    >
                      Add Ingredient and Quantity
                    </Button>

                    <h3 className="moveDown">X</h3>

                    <Form>
                      <FormGroup>
                        <h5>Quantity</h5>
                        <Input
                          onChange={this.handleInputChange}
                          name="quantity"
                          id="quantity"
                          placeholder="Quantity"
                        />
                      </FormGroup>
                    </Form>

                    <h5>Added Equipment</h5>

                    <ListGroup>
                      {this.state.renderEquipArray.map((data, i) => (
                        <ListGroupItem obj={data} key={i}>
                          {data}
                        </ListGroupItem>
                      ))}
                    </ListGroup>

                    <Dropdown
                      className="longer"
                      isOpen={this.state.openEquip}
                      toggle={this.toggleEquipment}
                    >
                      <DropdownToggle caret>Add Equipment</DropdownToggle>
                      <DropdownMenu>
                        {this.state.allEquipment.map((el, i) => (
                          <>
                            <DropdownItem
                              name={el.equipmentType}
                              key={i}
                              id={el._id}
                              onClick={e => {
                                this.changeValueEquip(e);
                              }}
                            >
                              Type: {el.equipmentType}
                            </DropdownItem>
                            <DropdownItem divider />
                          </>
                        ))}
                      </DropdownMenu>
                    </Dropdown>

                    <h5>Step Duration</h5>

                    <FormGroup>
                      <Input
                        onChange={this.handleInputChange}
                        name="duration"
                        id="duration"
                        placeholder="Step Duration (in minutes)"
                      />
                    </FormGroup>

                    <Button onClick={this.handleNextStep}>Next Step</Button>
                  </div>
                }
              </FormGroup>
            </Col>
            <Col size="md-5">
              <Button
                color="success"
                onClick={() => {
                  this.handlePostProduct();
                  this.loadProducts();
                }}
              >
                Create Product
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
