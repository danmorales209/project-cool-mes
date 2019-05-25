import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const AddOrderForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input type="" name="productName" id="productName" onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Product Name" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsNeeded">Total Units Needed</Label>
                <Input type="" name="Units Needed" id="unitsNeeded" onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Total Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input type="" name="dueDate" id="dueDate" onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Due Date" />
            </FormGroup>
            <FormGroup>
                <Label for="customerName">Customer Name</Label>
                <Input type="text" name="customerName" id="customerName" onChange={(e) => this.handleInputChange(e.target.value)} placeholder="Jane Doe" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="address" onChange={(e) => this.handleInputChange(e.target.value)} placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" onChange={(e) => this.handleInputChange(e.target.value)} id="exampleCity" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" onChange={(e) => this.handleInputChange(e.target.value)} id="exampleState" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" onChange={(e) => this.handleInputChange(e.target.value)} id="exampleZip" />
            </FormGroup>
            <Button color="success" onClick={props.handlePostOrder}>Submit</Button>
        </Form>
    );
}
export default AddOrderForm;