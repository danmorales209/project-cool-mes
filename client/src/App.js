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
    authorized: null,
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
      this.setState({ token: savedToken }, () => {
        this.validateUser()
      });
    }


  };

  validateUser = () => {

    if (localStorage.getItem("token")) {
      this.setState({ token: localStorage.getItem("token") })
    }

    axios.post('/user/validate', { "token": this.state.token })
      .then(response => {
        console.log("Checking user");
        if (response.data.valid) {
          this.setState({ authorized: true }, () => console.log(this.state))
        }
        else {
          this.setState({ authorized: false, user: null, token: null })
        }
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
            <Switch>

              <Route exact path='/'
                render={(props) => (
                  this.state.authorized === true
                    ? <Home />
                    : <Redirect to="/login" {...props} handleLogin={this.handleLogin} />
                )}
              />

              <Route exact path="/products"
                render={(props) => (
                  this.state.authorized === true
                    ? <Products />
                    : <Login {...props} handleLogin={this.handleLogin} />
                )} />

              <Route exact path="/orders"
                render={(props) => (
                  this.state.authorized === true
                    ? <Orders />
                    : <Login {...props} handleLogin={this.handleLogin} />
                )} />

              <Route exact path="/inventory"
                render={(props) => (
                  this.state.authorized === true
                    ? <Inventory />
                    : <Login {...props} handleLogin={this.handleLogin} />
                )} />

              <Route exact path="/manufacturing"
                render={() => (
                  this.state.authorized === true
                    ? <Manufacturing />
                    : <Login handleLogin={this.handleLogin} />
                )} />



              {/* <Route path="/products" component={Products} />
              <Route path="/orders" component={Orders} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/manufacturing" component={Manufacturing} /> */}

              <Route
                exact path="/login"
                render={(props) => (<Login {...props} handleLogin={this.handleLogin} auth={this.authorized} />)}
              />

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
