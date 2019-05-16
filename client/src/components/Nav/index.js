import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="collapse navbar-collapse" id="navbar-collapse-01">
        <ul class="nav navbar-nav">
          <li><a className="navbar-brand" href="/">Home</a></li>
          <li><a className="navbar-brand" href="/products">Products</a></li>
          <li><a className="navbar-brand" href="/orders">Orders</a></li>
          <li><a className="navbar-brand" href="/inventory">Inventory</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a className="navbar-brand" href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
