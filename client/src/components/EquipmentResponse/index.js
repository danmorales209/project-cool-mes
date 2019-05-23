import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, Input
} from 'reactstrap';

const EquipmentCard = (props) => {
    return (
        <Card key={props.key}>
            <CardBody>
                <CardTitle>Name: {props.obj.name}</CardTitle>
                <CardText>Type: {props.obj.equipmentType}</CardText>
                <Input placeholder={"update name" }></Input>
                <Input placeholder={"update type"}></Input>
            </CardBody>
        </Card>
    );
};

export default EquipmentCard;