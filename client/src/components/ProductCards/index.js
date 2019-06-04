import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';

const ProductCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Product Name: {props.obj.name}</CardTitle>
                    <CardText>Product Description: {props.obj.description}</CardText>
                    <Button>Open</Button>
                    <Button onClick={() => props.delete(props.obj._id)}>Delete</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductCard;