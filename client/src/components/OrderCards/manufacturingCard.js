import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const btnFunc = (props) => {
  if (props.obj.priority === 0) {
    return <Button onClick={() => props.clickPost(props.obj._id)}>Start</Button>
  } else if (props.obj.priority === 1) {
    return <Button onClick={() => props.clickPost(props.obj._id)}>Complete</Button>
  } else {
    return <></>
  }
}

const OrderCard = (props) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>Order Number:{props.obj._id} Status: {props.obj.status}</CardTitle>
          <CardSubtitle>Product Name:{props.obj.productName}
            <br></br>
            Units:{props.obj.qtyNeeded}</CardSubtitle>
          <CardText>
            Due Date: {props.obj.dueDate}
            <br></br>
            Customer Name: {props.obj.customer.name}
            <br></br>
            Customer Address:
            <br></br>
            {props.obj.customer.address}, {props.obj.customer.city}, {props.obj.customer.state} {props.obj.customer.zip}
          </CardText>
          <Button onClick={() => props.clickSteps(props.obj._id)}>See Steps</Button>
          {btnFunc(props)}
        </CardBody>
      </Card>
    </>
  );
};

export default OrderCard;