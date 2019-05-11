import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/login">
        Login
      </a>
      <a className="navbar-brand" href="/">
        Dashboard
      </a>
      <a className="navbar-brand" href="/products">
        Products
      </a>
      <a className="navbar-brand" href="/orders">
        Orders
      </a>
      <a className="navbar-brand" href="/inventory">
        Inventory
      </a>
    </nav>
  );
}

export default Nav;
