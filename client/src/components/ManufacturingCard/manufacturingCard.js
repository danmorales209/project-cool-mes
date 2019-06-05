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
            Order Number:{props.obj._id} Status: {props.obj.status}
          </CardTitle>
          <CardSubtitle>
            Product Name:{props.obj.productName}
            <br />
            Units:{props.obj.qtyNeeded}
          </CardSubtitle>
          <CardText>
            Due Date: {props.obj.dueDate}
            <br />
            Customer Name: {props.obj.customer.name}
            <br />
            Customer Address:
            <br />
            {props.obj.customer.address}, {props.obj.customer.city},{" "}
            {props.obj.customer.state} {props.obj.customer.zip}
          </CardText>
          
          <Button onClick={() => props.clickStart(props.obj._id)}>
          {props.obj.priority === 0? "Start Order": "Complete Order"}
          </Button>

        </CardBody>
      </Card>
    </>
  );
};

export default ManufacturingCard;
