import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const MaterialCard = (props) => {
    return (
        <Card key={props.key}>
            <CardBody>
                <CardTitle>Name: {props.obj.name}</CardTitle>
                <CardText>Quantity: {props.obj.quantity}</CardText>
                <CardText>Units: {props.obj.units}</CardText>

            </CardBody>
        </Card>
    );
};

export default MaterialCard;