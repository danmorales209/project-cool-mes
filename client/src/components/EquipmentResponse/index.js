import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import axios from "axios";



export default class EquipmentCard extends React.Component {

    state = {
        dropdownOpen: false,
        equipmentArray: [],
    };


    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    select = (e) => {
        // console.log(e.target.id)
        let id = e.target.id;
        axios.get("/api/equipment/GET/" + id)
            .then(res => {
                this.setState({ equipmentArray: res.data.equipment })
            })
    }

    render() {

        return (
            <>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.equipmentObj.map((el, i) =>
                            <>
                                {/* <DropdownItem key={i}>Name: {el.name}</DropdownItem> */}
                                {/* {console.log(el)} */}
                                <DropdownItem
                                    name={el.equipmentType}
                                    key={i} id={el._id}
                                    onClick={this.select}>Type:
                                    {el.equipmentType}
                                </DropdownItem>
                                <DropdownItem divider />
                            </>
                        )}

                    </DropdownMenu>
                </Dropdown>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.equipmentArray.map((el, i) =>
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{el.name}</td>
                                {console.log(el[i])}
                                <td>{el.status}</td>

                                </tr>
                            )}

                    </tbody>
                </Table>
            </>
        );
    }
}