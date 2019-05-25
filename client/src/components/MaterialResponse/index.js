import React from "react";
import { Table } from 'reactstrap';

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
                    </tr>
                )}

            </tbody>
        </Table>
    );
};

export default MaterialCard;