import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {

  state = {
    steps: [],

  }

  handleAddStep = () => {
    let steps = this.state.steps;
    steps.push("");
    return (
      // Take steps arr and add another array item with and increased value of 1 each time
      this.setState({
        steps: steps
      })
    )
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

    this.setState({steps: steps})
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="productName">Product Name</Label>
          <Input type="" name="productName" id="productName" placeholder="Add product name" />
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">Add Description</Label>
          <Input type="" name="productDescription" id="productDescription" placeholder="Add some info..." />
        </FormGroup>
        <FormGroup>
          <Label for="stepsInput">Steps</Label>
          <br></br>
          {this.state.steps.map((el, index) =>
            <div>
              <Input
                value={this.state.steps[index]}
                id={index} key={index} name={"stepsInput" + index}
                placeholder="Add step info..."
                onChange={this.handleChange}>
              </Input>
              <Button
                for={"stepsInput" + index}
                id={index}
                onClick={this.handleDelete}
              >
                Remove Step
              </Button>
            </div>)}
          <Button onClick={this.handleAddStep}>Add Another Step</Button>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}