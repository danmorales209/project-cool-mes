import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const EquipmentCard = (props) => {
    return (
        <div>
            <Card key={props.key}>
                <CardBody>
                    <CardTitle>Material</CardTitle>
                    <CardText>Name: {props.obj.name}</CardText>
                    <CardText>Type: {props.obj.equipmentType}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default EquipmentCard;