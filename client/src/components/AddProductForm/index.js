import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ProductCard from "../ProductCards/index";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
import Axios from "axios";

export default class Example extends React.Component {
  state = {
    steps: [],
    productName: "",
    productDescription: "",
    equipment: [],
    inventory: []
  };

  toggleInventory = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  toggleEquipment = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  componentDidMount = () => {
    Axios.get("/api/equipment/GET").then(results => {
      this.setState({ equipment: results.data });
    });
    Axios.get("/api/inventory/GET").then(results => {
      this.setState({ inventory: results.data });
    });
  };

  handleAddStep = () => {
    let steps = this.state.steps;
    steps.push("");
    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps
      })
    );
  };
  handleName = e => {
    this.setState({ productName: e.target.value });
  };
  handleDescription = e => {
    this.setState({ productDescription: e.target.value });
  };
  handleChange = e => {
    let steps = this.state.steps;
    let index = e.target.id;
    steps[index] = e.target.value;
    this.setState({ steps: steps });
  };
  handleDelete = e => {
    let steps = this.state.steps;
    let id = e.target.id;
    steps = steps.filter((el, index) => index !== +id);

    this.setState({ steps: steps });
  };
  handleSubmit = () => {
    console.log(this.state.steps);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="productName">Product Name</Label>
          <Input
            onChange={this.handleName}
            name="productName"
            id="productName"
            placeholder="Add product name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">Add Description</Label>
          <Input
            onChange={this.handleDescription}
            name="productDescription"
            id="productDescription"
            placeholder="Add a description..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="stepsInput">Steps</Label>
          <br />
          {this.state.steps.map((el, index) => (
            <div>
              <Input
                value={this.state.steps[index]}
                id={index}
                key={index}
                name={"directionsInput" + index}
                placeholder="Directions"
                onChange={this.handleChange}
              />
              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleInventory}
              >
                <DropdownToggle caret>Add Ingredients</DropdownToggle>
                <DropdownMenu>
                  {this.state.inventory.map((el, i) => (
                    <>
                      {/* <DropdownItem key={i}>Name: {el.name}</DropdownItem> */}
                      {/* {console.log(el)} */}
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

              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggleEquipment}
              >
                <DropdownToggle caret>Add Equpiment</DropdownToggle>
                <DropdownMenu>
                  {this.state.equipment.map((el, i) => (
                    <>
                      {/* <DropdownItem key={i}>Name: {el.name}</DropdownItem> */}
                      {/* {console.log(el)} */}
                      <DropdownItem
                        name={el.equipment}
                        key={i}
                        id={el._id}
                        onClick={this.select}
                      >
                        Type: {el.equipmentType}
                      </DropdownItem>
                      <DropdownItem divider />
                    </>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <Button id={index} onClick={this.handleDelete}>
                Remove Step
              </Button>
            </div>
          ))}
          <Button onClick={this.handleAddStep}>Add Step</Button>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
