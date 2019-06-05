import React from "react";
import { ListGroup, ListGroupItem, Button, Jumbotron } from "reactstrap";

const RecipeSteps = props => {
  return (
    <>
      <Jumbotron>
        <h3 style={{marginLeft: "0px"}}>Product: {props.obj.name}</h3>
       
        <h4>Description:</h4>
        <p>{props.obj.description}</p>
        <h4>Manufacturing Steps:</h4>
        <ListGroup>
          {props.obj.steps.filter((e, index) => index === props.currentStep).map((el) => (
            <ListGroupItem key={props.currentStep} >
              <p>{`Step : ${props.currentStep + 1}`}</p>
              <p>{el.directions}</p>
              <Button color="success" index={props.currentStep} onClick={() => props.nextStep (props.obj._id)}>
                Step Complete
            </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Jumbotron>
    </>
  );
};

export default RecipeSteps;
