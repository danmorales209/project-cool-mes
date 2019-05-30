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
          <CardTitle>Order Number:{props.obj.orderNumber} Status: {props.obj.status}</CardTitle>
          <CardSubtitle>Product Name:{props.obj.productName}
          <br></br>
           Units:{props.obj.qtyNeeded}</CardSubtitle>
          <CardText>
            Due Date: {props.obj.dueDate}
            <br></br>
            {/* Customer Name: {props.obj.customer.name} */}
            <br></br>
            Customer Address: 
            <br></br>
            {/* {props.obj.customer.address}, {props.obj.customer.city}, {props.obj.customer.state} {props.obj.customer.zip} */}
          </CardText>
          <Button>Edit Order</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderCard;