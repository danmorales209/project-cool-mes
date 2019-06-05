import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

class App extends React.Component {
  state = {
    user: "",
    token: "",
    sideDrawerOpen: false
  };

  login = (route, data) => {
    console.log("trying to log in...");

    axios.post(route, data).then(response => {
      console.log("Trying to send some data to login");

      this.setState(
        { user: response.data.email, token: response.data.token },
        () => {
          console.log(this.state);

          this.validUser();
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
    // console.log(this.state);
  };

  validUser = () => {
    axios.post("/user/validate", this.state.token).then(response => {
      console.log(response.valid);

      return response.valid;
    });
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
            {/* <Nav /> */}
            <Switch>
              <Route
                exact
                path="/signup"
                render={props =>
                  !this.validUser() && (
                    <Signup {...props} handleSignUp={this.handleSignUp} />
                  )
                }
              />

              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/inventory" component={Inventory} />
              <Route exact path="/manufacturing" component={Manufacturing} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
