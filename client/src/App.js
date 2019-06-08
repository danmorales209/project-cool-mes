import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Nav from "./components/Nav";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Manufacturing from "./pages/Manufacturing";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { isNull } from "util";

class App extends React.Component {
  state = {
    user: null,
    token: null,
    sideDrawerOpen: false
  };

  login = (route, data) => {
    console.log("trying to log in...");

    axios.post(route, data).then(response => {
      console.log("Trying to send some data to login");

      this.setState(
        { user: response.data.email, token: response.data.token },
        () => {
          console.log(this.state.token);
          localStorage.setItem("user", JSON.stringify(response.data.email));
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }
      );
    });
  };

  handleLogin = data => {
    console.log(data);

    this.login("/user/login", data);
  };

  signup = (route, data) => {
    console.log("trying to sign-up");

    axios(route, data).then(response => {
      this.setState(
        { user: response.data.email, token: response.data.token },
        () => {
          console.log(this.state);

          console.log(this.validUser());
        }
      );
    });
  };

  handleSignUp = data => {
    this.signup("/user/signup", data);
  };

  componentDidMount = () => {

    let savedToken = JSON.parse(localStorage.getItem("token"));

    if (savedToken) {
      this.setState({ token: savedToken });
    }


  };

  validateUser = () => {

    let token = localStorage.getItem("token") || this.state.token;

    return new Promise((resolve, reject) => {

      axios.post("/user/validate", token).then(response => {

        if (response.valid === true) {
          resolve(response.valid);
        }

        else {
          reject({ error: "Unauthorized User" })
        }
      });

    })

  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    let authorizedRender, unauthorizedRender;

    authorizedRender =
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/manufacturing" component={Manufacturing} />
      </>

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: "64px" }}>
          <p />
        </main>

        <Router>
          <div>
            <Switch>
              <Route
                exactpath="/login"
                render={props => (<Login {...props} handleLogin={this.handleLogin} />)}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/inventory" component={Inventory} />
              <Route exact path="/manufacturing" component={Manufacturing} />
            </Switch>
          </div>
        </Router>
        <div />
        <Footer />
      </div>
    );
  }
}

export default App;
