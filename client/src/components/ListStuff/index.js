import React from 'react';
import { ListGroupItem } from 'reactstrap';

const ListStuff = (props) => {
  return (
    <>
      <ListGroupItem>{props.obj.ingredient}X{props.obj.qtyNeeded}</ListGroupItem>
    </>
  );
}
export default ListStuff;