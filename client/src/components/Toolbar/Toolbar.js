import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";
import Logout from "../Logout";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="toolbar_logo">
        <a href="/">MAKE.iT</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li className="page">
            <a href="/">Home</a>
          </li>
          <li className="page">
            <a href="/products">Products</a>
          </li>
          <li className="page">
            <a href="/orders">Orders</a>
          </li>
          <li className="page">
            <a href="/inventory">Inventory</a>
          </li>
          <li className="page">
            <a href="/manufacturing">Manufacturing</a>
          </li>
          <li>
            {props.authorized === true
              ? <a href="/" onClick={props.logout}>Logout</a>
              : null
            }

          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
