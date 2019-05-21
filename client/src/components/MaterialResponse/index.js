import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const MaterialCard = (props) => {
    return (
        <div>
            <Card key={props.key}>
                <CardBody>
                    <CardTitle>Material</CardTitle>
                    <CardText>Name: {props.obj.name}</CardText>
                    <CardText>Quantity: {props.obj.quantity}</CardText>
                    <CardText>Units: {props.obj.units}</CardText>

                </CardBody>
            </Card>
        </div>
    );
};

export default MaterialCard;