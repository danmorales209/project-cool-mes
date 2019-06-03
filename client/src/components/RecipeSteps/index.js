import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const RecipeSteps = props => {
  
  console.log(props.obj)

  return (
    <>
      <h3>Product:</h3>
      <h5>{props.obj.name}</h5>
      <h3>Description:</h3>
      <ListGroupItem>{props.obj.description}</ListGroupItem>
      <h3>Manufacturing Steps:</h3>
      <ListGroup>
        {/* {props.obj.steps[0].directions} */}
        {props.obj.steps.splice(props.currentStep, 1).map((el) => (
          <ListGroupItem key={props.currentStep}>
            <p>{`Step : ${props.currentStep + 1}`}</p>
            <p>{el.directions}</p>
            <button index={props.currentStep} onClick={props.nextStep}>
              Step Complete
            </button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default RecipeSteps;
