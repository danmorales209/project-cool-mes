import React from 'react';
import { ListGroupItem } from 'reactstrap';

const ListStuff = (props) => {
  return (
    <>
      <ListGroupItem><span>{props.obj.ingredientName}</span> X <span>{props.obj.quantity}</span></ListGroupItem>
    </>
  );
}
export default ListStuff;