import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const AddOrderForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input type="" name="productName" id="productName" value={props.productName} onChange={(e) => props.handleInputChange(e.target.value)} placeholder="Product Name" />
            </FormGroup>
            <FormGroup>
                <Label for="unitsNeeded">Total Units Needed</Label>
                <Input type="" name="qtyNeeded" id="qtyNeeded" value={props.qtyNeeded} onChange={(e) => props.handleInputChange(e.target.value)} placeholder="Total Units Needed" />
            </FormGroup>
            <FormGroup>
                <Label for="dueDate">Due Date</Label>
                <Input type="" name="dueDate" id="dueDate" value={props.dueDate} onChange={(e) => props.handleInputChange(e.target.value)} placeholder="Due Date" />
            </FormGroup>
            <FormGroup>
                <Label for="customerName">Customer Name</Label>
                <Input type="text" name="customerName" id="customerName" value={props.address} onChange={(e) => props.handleInputChange(e.target.value)} placeholder="Jane Doe" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input type="text" name="address" id="address" value={props.address} onChange={(e) => props.handleInputChange(e.target.value)} placeholder="1234 Main St" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" value={props.city} onChange={(e) => props.handleInputChange(e.target.value)} id="exampleCity" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" value={props.state} onChange={(e) => props.handleInputChange(e.target.value)} id="exampleState" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" value={props.zip} onChange={(e) => props.handleInputChange(e.target.value)} id="exampleZip" />
            </FormGroup>
            <Button color="success" onClick={props.handlePostOrder}>Submit</Button>
        </Form>
    );
}
export default AddOrderForm;