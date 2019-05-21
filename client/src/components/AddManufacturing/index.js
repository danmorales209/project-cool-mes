import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ManufacturingList = (props) => {
  return (
    <ListGroup>
      {this.state.obj.steps.map((el, i) => <ListGroupItem> obj={el} key={i} ></ListGroupItem>)}
    </ListGroup>
  );
}
export default ManufacturingList