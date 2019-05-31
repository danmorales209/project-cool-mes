import React from 'react';
import {
    ListGroup, ListGroupItem
} from 'reactstrap';



const RecipeSteps = (props) => {
    return (
        <>
            <h2>Product name</h2>
            <h3>{props.obj.name}</h3>
            <ListGroupItem>{props.obj.description}</ListGroupItem>
            <ListGroup>

                 {/* {props.obj.steps[0].directions} */}
                {props.obj.steps.map((el, i) => <ListGroupItem key={i}>Step #{i+1}<br></br>{el.directions}</ListGroupItem>)}
            </ListGroup>

        </>
    );
};

export default RecipeSteps;