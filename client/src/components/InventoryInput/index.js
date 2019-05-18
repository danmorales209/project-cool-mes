import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from "axios";
const InventoryInput = (props) => {


  const handleSubmit = () => {
    console.log(props.name, props.name2)
    // axios.post("/POST", (name=props.rawMatInv, name2=props.EqupInv)).then(res => {
    //   console.log(res);
    //   console.log(res.data)
    // })
  }
  return (
    <div>
      <InputGroup>
        <h2>Item Name </h2>
        <Input placeholder="value" />
        <InputGroupAddon addonType="append">
          <Button color="success" onClick={handleSubmit}>Update</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InventoryInput;