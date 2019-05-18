import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";


class App extends React.Component {
  state = {
    user: "",
    token: {}
  }

  componentDidMount = () => {
    console.log(this.state);

    let data = {
      "email": "dan@dan.com",
      "password": "password"
    }

    fetch("localhost:3001/api/user/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: data
    }).then(response => {
      response.json();

      console.log(response);

    }).catch(error => console.error(error));

  };




  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/inventory" component={Inventory} />
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
