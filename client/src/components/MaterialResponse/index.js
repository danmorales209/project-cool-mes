import React from "react";
import { Table, Button } from "reactstrap";

const MaterialCard = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Units</th>
          <th>Add Qty</th>
          <th>--</th>
        </tr>
      </thead>
      <tbody>
        {props.obj.map((el, i) => (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{el.name}</td>
            <td>{el.quantity}</td>
            <td>{el.units}</td>
            <td>
              <input
                className="add-equipment-field"
                onChange={e => props.onChange(e)}
                name={el._id}
              />
            </td>
            <td>
              <Button onClick={() => props.increaseBtn(el._id)}>Add</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MaterialCard;
