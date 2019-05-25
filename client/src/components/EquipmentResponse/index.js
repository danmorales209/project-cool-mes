import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



export default class EquipmentCard extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Dropdown
        </DropdownToggle>
                <DropdownMenu>
                    {this.props.equipmentObj.map((el, i) =>
                        <>
                            {/* <DropdownItem key={i}>Name: {el.name}</DropdownItem> */}
                            <DropdownItem >Type: {el.equipmentType}</DropdownItem>
                            <DropdownItem divider />
                        </>
                    )}

                </DropdownMenu>
            </Dropdown>
        );
    }
}