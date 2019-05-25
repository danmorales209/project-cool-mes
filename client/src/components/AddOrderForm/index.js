import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const AddOrderForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input type="" name="productName" id="productName" onChange={props.handleInputChange} placeholder="Product Name" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsNeeded">Total Units Needed</Label>
                <Input type="" name="Units Needed" id="unitsNeeded" onChange={props.handleInputChange} placeholder="Total Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsAvailable">Current Units Available</Label>
                <Input type="" name="unitsAvailable" id="unitsAvailable" onChange={props.handleInputChange} placeholder="Current Units Available" />
            </FormGroup>
            <FormGroup>
                <Label for="addUnitsNeeded">Additional Units Needed</Label>
                <Input type="" name="addUnitsNeeded" id="addUnitsNeeded" onChange={props.handleInputChange} placeholder="Additional Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input type="" name="dueDate" id="dueDate" onChange={props.handleInputChange} placeholder="Due Date" />
            </FormGroup>
            <FormGroup>
                <Label for="customerName">Customer Name</Label>
                <Input type="text" name="customerName" id="customerName" onChange={props.handleInputChange} placeholder="Jane Doe" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="address" onChange={props.handleInputChange} placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" onChange={props.handleInputChange} id="exampleCity" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" onChange={props.handleInputChange} id="exampleState" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" onChange={props.handleInputChange} id="exampleZip" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}
export default AddOrderForm;