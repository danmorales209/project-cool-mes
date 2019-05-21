import React from "react";
import axios from 'axios';
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
    token: ""
  }

  login = (route, data) => {

    console.log("trying to log in...")

    axios.post(route, data).then( (response) => {
      console.log("Trying to send some data to login")

      this.setState({ user: response.data.email, token: response.data.token }, () => console.log(this.state));

    });
  };

  handleLogin = (data) => {

    console.log(data)

    this.login("/user/login", data);
  }

  componentDidMount = () => {
    // console.log(this.state);

  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/login"
              render={(props) => <Login {...props} handleLogin={this.handleLogin} />}
            />
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
