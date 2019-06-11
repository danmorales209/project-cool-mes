import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
//import LogInCarousel from "../components/LogInCarousel";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = props.updateUser.bind(this);
    this.authorizeUser = props.authorizeUser.bind(this);

    this.state = {
      email: "",
      password: ""

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

  handleSubmit = () => {
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

          localStorage.setItem("user", JSON.stringify(response.data.email))
          localStorage.setItem("token", JSON.stringify(response.data.token))


          this.props.history.push(this.props.history.location.pathname)
          document.location.replace(this.props.history.location.pathname)
        })
      }
    });
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
            {/* <LogInCarousel></LogInCarousel> */}
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
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="something@somewhere.com" onChange={(e) => this.handleEmailChange(e)} />
              </FormGroup>
            </Col>
            <Col size="md-6">
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Secret Code" onChange={(e) => this.handlePWChange(e)} />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={() => this.handleSubmit()}>Sign in</Button>
        </Form>
      </div>
    );
  }
}
