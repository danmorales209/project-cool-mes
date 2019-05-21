import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const EquipmentCard = (props) => {
    return (
        <Card key={props.key}>
            <CardBody>
                <CardTitle>Name: {props.obj.name}</CardTitle>
                <CardText>Type: {props.obj.equipmentType}</CardText>
            </CardBody>
        </Card>
    );
};

export default EquipmentCard;