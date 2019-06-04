import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const RecipeSteps = props => {
  return (
    <>
      <h3>Product: {props.obj.name}</h3>
      <h4>Description: {props.obj.description}</h4>
      <h4>Manufacturing Steps:</h4>
      <ListGroup>
        {props.obj.steps.filter((e, index) => index === props.currentStep).map((el) => (
          <ListGroupItem key={props.currentStep}>
            <p>{`Step : ${props.currentStep + 1}`}</p>
            <p>{el.directions}</p>
            <Button color="success" index={props.currentStep} onClick={props.nextStep}>
              Step Complete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default RecipeSteps;
