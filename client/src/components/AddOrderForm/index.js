import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const AddOrderForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input type="" name="productName" id="productName" placeholder="Product Name" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsNeeded">Total Units Needed</Label>
                <Input type="" name="Units Needed" id="unitsNeeded" placeholder="Total Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsAvailable">Current Units Available</Label>
                <Input type="" name="unitsAvailable" id="unitsAvailable" placeholder="Current Units Available" />
            </FormGroup>
            <FormGroup>
                <Label for="addUnitsNeeded">Additional Units Needed</Label>
                <Input type="" name="addUnitsNeeded" id="addUnitsNeeded" placeholder="Additional Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input type="" name="dueDate" id="dueDate" placeholder="Due Date" />
            </FormGroup>
            <FormGroup>
                <Label for="customerName">Customer Name</Label>
                <Input type="text" name="customerName" id="customerName" placeholder="Jane Doe" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}
export default AddOrderForm;