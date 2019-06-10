import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const OrderCard = (props) => {
  console.log(props.obj, "line 9")
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle><h5>Product Name: </h5>{props.obj.productName}</CardTitle>
          <CardTitle><h5>Order Status: </h5>{props.obj.status}</CardTitle>
          <CardSubtitle><h5>Units: </h5>{props.obj.qtyNeeded}</CardSubtitle>
          <CardText>
            <h5>Due Date: </h5>{props.obj.dueDate}
            <h5>Customer Name: </h5>{props.obj.customer.name}
            <h5>Customer Address:</h5>
            {props.obj.customer.address}, {props.obj.customer.city}, {props.obj.customer.state} {props.obj.customer.zip}
          </CardText>
          {props.obj.status === "New" || props.obj.status === "In Progress" || props.obj.status === "Completed" ?  <Button onClick={() => props.delete(props.obj._id)}>Delete</Button> : <></>}
        </CardBody>
      </Card>
    </>
  );
};

export default OrderCard;