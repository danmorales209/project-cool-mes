import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {

  state = {
    index: 1,
    steps: [1],

  }

  handleAddStep = () => {
    return (
      this.setState({
        steps: [...this.state.steps,this.state.index +1],
        index: this.state.index +1
        }),
      console.log(this.state.steps)
    )
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
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
          {/* { create an array basedon step number and return input field based on that} */}
          {this.state.steps.map(el => <Input id={el} key={el} name={"stepsInput"+el} placeholder="Add step info..."></Input>)}
          <Button onClick={this.handleAddStep}>Add Another Step</Button>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}