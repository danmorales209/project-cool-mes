import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <ListGroup>
        <ListGroupItem>Step 1</ListGroupItem>
        <ListGroupItem>Step 2</ListGroupItem>
        <ListGroupItem>Step 3</ListGroupItem>
        <ListGroupItem>Step 4</ListGroupItem>
        <ListGroupItem>Step 5</ListGroupItem>
      </ListGroup>
    );
  }
}
