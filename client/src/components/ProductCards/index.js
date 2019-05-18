import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';
import { Col, Row, Container } from ".././Grid";

const ProductCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Product Name: </CardTitle>
                    <CardText>Product Description: </CardText>
                    <CardText>Steps:</CardText>
                    <Button>Open</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProductCard;