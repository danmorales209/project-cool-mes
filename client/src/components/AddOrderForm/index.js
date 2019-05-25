import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddOrderForm extends Component {
    state = {
        activeOrders: [],
        queuedOrders: [],
        completedOrders: [],
        productName: "",
        qtyNeeded: "",
        dueDate: "",
        name: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: "",
            lastName: ""
        });
    };
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="productName">Product Name</Label>
                    <Input type="" name="productName" id="productName" value={this.state.productName} onChange={this.handleInputChange} placeholder="Product Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="unitsNeeded">Total Units Needed</Label>
                    <Input type="" name="qtyNeeded" id="qtyNeeded" value={this.state.qtyNeeded} onChange={this.handleInputChange} placeholder="Total Units Needed" />
                </FormGroup>
                <FormGroup>
                    <Label for="dueDate">Due Date</Label>
                    <Input type="" name="dueDate" id="dueDate" value={this.state.dueDate} onChange={this.handleInputChange} placeholder="Due Date" />
                </FormGroup>
                <FormGroup>
                    <Label for="customerName">Customer Name</Label>
                    <Input type="text" name="customerName" id="customerName" value={this.state.address} onChange={this.handleInputChange} placeholder="Jane Doe" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} placeholder="1234 Main St" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} id="exampleState" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" value={this.state.zip} onChange={this.handleInputChange} id="exampleZip" />
                </FormGroup>
                <Button color="success" onClick={props.handlePostOrder}>Submit</Button>
            </Form>
        );
    }

}
export default AddOrderForm;