import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const OrderCard = (props) => {
  return (
    <div>
      {/* <Card>
        <CardBody>
          <CardTitle>Order Number:{data.orderNumber}</CardTitle>
          <CardSubtitle>Product Name:{data.productName} Units:{data.qtyNeeded}</CardSubtitle>
          <CardText>Due Date:{data.dueDate},
            Customer Name:{data.customerName},
            Customer Address:{data.address} {data.city}, {data.state} {data.zip}
          </CardText>
          <Button>Edit Order</Button>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default OrderCard;