import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import axios from "axios";
const InventoryInput = (props) => {


 
  return (
    <div>
      <InputGroup>
        <h2>Item Name </h2>
        <Input placeholder="value" />
        <InputGroupAddon addonType="append">
          <Button color="success">Update</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InventoryInput;