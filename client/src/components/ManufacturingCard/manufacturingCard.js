import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";



const ManufacturingCard = props => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h5>Order Number:</h5> {props.obj._id} <h5>Status: </h5>{props.obj.status}
          </CardTitle>
          <CardSubtitle>
            <h5>Product Name:</h5>{props.obj.productName} 
            <h5>Units:</h5>{props.obj.qtyNeeded}</CardSubtitle>
          <CardText>
           <h5>Due Date: </h5>{props.obj.dueDate}
            <h5>Customer Name: </h5>{props.obj.customer.name}
            <h5>Customer Address: </h5>
            {props.obj.customer.address}, {props.obj.customer.city},{" "}
            {props.obj.customer.state} {props.obj.customer.zip}
          </CardText>

          {props.obj.priority === 0 ? <Button onClick={() => props.clickStart(props.obj._id)}>Start Order</Button> : <Button onClick={() => props.clickSteps(props.obj._id)}>Steps</Button>}
        </CardBody>
      </Card>
    </>
  );
};

export default ManufacturingCard;
