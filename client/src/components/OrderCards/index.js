import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const OrderCard = (props) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>Product Name: {props.obj.productName}</CardTitle>
          <CardSubtitle>
            Units: {props.obj.qtyNeeded}</CardSubtitle>
          <CardText>
            Due Date: {props.obj.dueDate}
            <br></br>
            Customer Name: {props.obj.customer.name}
            <br></br>
            Customer Address:
            <br></br>
            {props.obj.customer.address}, {props.obj.customer.city}, {props.obj.customer.state} {props.obj.customer.zip}
          </CardText>
          <Button onClick={() => props.delete(props.obj._id)}>Delete</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderCard;