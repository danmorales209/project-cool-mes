import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";

const AddOrderForm = (props) => {
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
            <Button>Submit</Button>
        </Form>
    );
}
export default AddOrderForm;