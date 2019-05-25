import React from "react";
import { Table, Button } from 'reactstrap';

const MaterialCard = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Units</th>
                </tr>
            </thead>
            <tbody>
                {props.obj.map((el, i) =>
                    <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{el.name}</td>
                        <td>{el.quantity}</td>
                        <td>{el.units}</td>
                        <Button onClick={()=> props.increaseBtn(el._id)}>Add 1</Button>
                    </tr>
                )}

            </tbody>
        </Table>
    );
};

export default MaterialCard;