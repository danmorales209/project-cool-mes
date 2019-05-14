import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const OrderCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Pass in Order Number</CardTitle>
          <CardSubtitle>Product Name and Units</CardSubtitle>
          <CardText>Due Date, Customer Name, Customer Address, Customer Phone Number</CardText>
          <Button>Edit Order</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderCard;