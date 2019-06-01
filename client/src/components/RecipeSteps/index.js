import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const RecipeSteps = props => {
  return (
    <>
      <h3>Product:</h3>
      <h5>{props.obj.name}</h5>
      <h3>Description:</h3>
      <ListGroupItem>{props.obj.description}</ListGroupItem>
      <h3>Manufacturing Steps:</h3>
      <ListGroup>
        {/* {props.obj.steps[0].directions} */}
        {props.obj.steps.map((el, i) => (
          <ListGroupItem key={i}>
            <br />
            {el.directions}{" "}
            <button index={i} onClick={e => props.handleDelete(e)}>
              Step Complete
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default RecipeSteps;
