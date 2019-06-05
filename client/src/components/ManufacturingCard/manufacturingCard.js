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

          {props.obj.priority === 0 ? <Button onClick={() => props.clickStart(props.obj._id)}>Start Order</Button> : <Button onClick={() => props.clickSteps(props.obj._id)}>Steps</Button>}
        </CardBody>
      </Card>
    </>
  );
};

export default ManufacturingCard;
