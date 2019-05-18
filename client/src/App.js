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
    token: {}
  }

  login = (route, data, cb = this.setState, state = this.state) => {
    axios.post(route, data).then((response) => {
      console.log(response.data);
      cb({ user: response.data.email, token: response.data.email }).then(() => console.log(state));
    }).catch(err => console.error(err));
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
