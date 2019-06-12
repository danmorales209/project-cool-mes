import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
import axios from 'axios';
import LogInCarousel from "../components/LogInCarousel";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = props.updateUser.bind(this);
    this.authorizeUser = props.authorizeUser.bind(this);

    this.state = {
      email: "",
      password: "",
      verfiy: ""
    }
  };

  componentDidMount = () => {
    console.log(this.props)
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePWChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleVerifyChange = (e) => {
    this.setState({ verify: e.target.value });
  }

  handleLogin = () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };

    this.login(data);

  }

  login = (data) => {
    console.log("trying to log in...");

    const route = "/user/login";

    axios.post(route, data).then(response => {
      console.log("Trying to send some data to login");

      if (response.data) {
        this.updateUser(response.data.email, response.data.token, () => {
          this.authorizeUser(true);

          localStorage.setItem("user", JSON.stringify(response.data.email));
          localStorage.setItem("token", JSON.stringify(response.data.token));

          this.props.history.push(this.props.history.location.pathname);
          document.location.replace(this.props.history.location.pathname);

        });
      }
    });
  };

  handleSignUp = () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    }

    this.signup(data);
  }

  signup = (data) => {
    console.log("trying to sign-up");

    let route = "/user/signup";

    axios.post(route, data).then(response => {
      console.log("Trying to send some data to login");

      if (response.data) {
        this.updateUser(response.data.email, response.data.token, () => {
          this.authorizeUser(true);

          localStorage.setItem("user", JSON.stringify(response.data.email));
          localStorage.setItem("token", JSON.stringify(response.data.token));

          this.props.history.push(this.props.history.location.pathname);
          document.location.replace(this.props.history.location.pathname);

        });
      }
    });
  };

  componentDidMount = () => {

    let savedToken = JSON.parse(localStorage.getItem("token"));

    if (savedToken) {
      this.setState({ token: savedToken }, () => {
        this.validateUser();
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


  render() {
    return (
      <div className="container">

        <Row>
          <Col size="md-12">
            <LogInCarousel />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1>Log In</h1>
          </Col>
        </Row>

        <Form>
          <Row form>
            <Col size="md-6">
              <FormGroup>
                <Label for="loginEmail">Email</Label>
                <Input type="email" name="loginEmail" id="loginEmail" placeholder="something@somewhere.com" onChange={(e) => this.handleEmailChange(e)} />
              </FormGroup>
            </Col>
            <Col size="md-6">
              <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input type="password" name="loginPassword" id="loginPassword" placeholder="Secret Code" onChange={(e) => this.handlePWChange(e)} />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={() => this.handleLogin()}>Sign in</Button>
        </Form>

        {this.state.authorized === true
          ? null
          : (<>
            <Row>
              <Col size="md-12">
                <h1>Sign up</h1>
              </Col>
            </Row>

            <Form>
              <Row form>
                <Col size="md-12">
                  <FormGroup>
                    <Label for="signUpEmail">Email</Label>
                    <Input type="email" name="email" id="signUpEmail" placeholder="Please enter your email" onChange={(e) => this.handleEmailChange(e)} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col size="md-6">
                  <FormGroup>
                    <Label for="signUpPassword">Password</Label>
                    <Input type="password" name="password" id="signUpPassword" placeholder="Please enter your password " onChange={(e) => this.handlePWChange(e)} />
                  </FormGroup>
                </Col>
                <Col size="md-6">
                  <FormGroup>
                    <Label id="verifyMessage" for="verifyPassword">Please Verify Your Password</Label>
                    <Input type="password" name="password" id="verifyPassword" placeholder="Please verify your password " onChange={(e) => this.handleVerifyChange(e)} />
                  </FormGroup>
                </Col>
              </Row>
              <Button onClick={() => this.handleSignUp()}>Sign up</Button>
            </Form>
          </>
          )}

      </div>
    );
  }
}
