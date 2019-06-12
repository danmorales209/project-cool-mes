import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      let savedToken = JSON.parse(localStorage.getItem("token"));
      let savedUser = JSON.parse(localStorage.getItem("user"));


      this.setState({ token: savedToken, user: savedUser, authorized: true })
    }
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  updateUser = (inUser, inToken, cb = null) => {

    this.setState({ user: inUser, token: inToken }, cb)

  }

  authorizeUser = (isAuthorized) => {
    if (isAuthorized) {
      this.setState({ authorized: isAuthorized })
    }
    else {
      this.setState({ authorized: false, user: null, token: null })
    }
  }

  logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    this.setState({
      user: null,
      password: null,
      authorized: false
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} authorized={this.state.authorized} logout={this.logout}/>
        <SideDrawer show={this.state.sideDrawerOpen} authorized={this.state.authorized} />
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
                    : <Login {...props}
                      handleLogin={this.handleLogin}
                      authorizeUser={this.authorizeUser}
                      updateUser={this.updateUser}
                    />
                )}
              />

              <Route exact path="/products"
                render={(props) => (
                  this.state.authorized === true
                    ? <Products />
                    : <Login {...props}
                      handleLogin={this.handleLogin}
                      authorizeUser={this.authorizeUser}
                      updateUser={this.updateUser}
                    />
                )} />

              <Route exact path="/orders"
                render={(props) => (
                  this.state.authorized === true
                    ? <Orders />
                    : <Login {...props}
                      handleLogin={this.handleLogin}
                      authorizeUser={this.authorizeUser}
                      updateUser={this.updateUser}
                    />
                )} />

              <Route exact path="/inventory"
                render={(props) => (
                  this.state.authorized === true
                    ? <Inventory />
                    : <Login {...props}
                      handleLogin={this.handleLogin}
                      authorizeUser={this.authorizeUser}
                      updateUser={this.updateUser}
                    />
                )} />

              <Route exact path="/manufacturing"
                render={(props) => (
                  this.state.authorized === true
                    ? <Manufacturing />
                    : <Login {...props}
                      handleLogin={this.handleLogin}
                      authorizeUser={this.authorizeUser}
                      updateUser={this.updateUser}
                    />
                )} />



              {/* <Route path="/products" component={Products} />
              <Route path="/orders" component={Orders} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/manufacturing" component={Manufacturing} /> */}

              <Route
                exact path="/login"
                render={(props) => (
                  <Login {...props}
                    handleLogin={this.handleLogin}
                    authorizeUser={this.authorizeUser}
                    updateUser={this.updateUser}
                  />)}
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
