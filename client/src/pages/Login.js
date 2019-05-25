import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
//import LogInCarousel from "../components/LogInCarousel";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = props.handleLogin.bind(this);
    this.state = {
      email: "",
      password: ""

    }
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePWChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = () => {
    console.clear();
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    this.handleLogin(data);
  }


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
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={(e) => this.handleEmailChange(e)} />
              </FormGroup>
            </Col>
            <Col size="md-6">
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={(e) => this.handlePWChange(e)} />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={() => this.handleSubmit()}>Sign in</Button>
        </Form>
      </div>
    );
  }
}
