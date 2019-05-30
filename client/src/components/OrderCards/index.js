import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const OrderCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Order Number:{props.obj.orderNumber} Status: {props.obj.status}</CardTitle>
          <CardSubtitle>Product Name:{props.obj.productName} Units:{props.obj.qtyNeeded}</CardSubtitle>
          <CardText>Due Date:{props.obj.dueDate},
            Customer Name:{props.obj.customerName},
            Customer Address:{props.obj.address} {props.obj.city}, {props.obj.state} {props.obj.zip}
          </CardText>
          <Button>Edit Order</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderCard;