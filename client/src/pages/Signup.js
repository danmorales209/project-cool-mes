import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";
//import LogInCarousel from "../components/LogInCarousel";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUp = props.handleSignUp.bind(this);
    this.state = {
      email: "",
      password: "",
      verify: ""
    }
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handlePWChange = (e) => {
    this.setState({ password: e.target.value });
  }
  handleVerifyChange = (e) => {
    this.setState({ verify: e.target.value});
  }

  handleSubmit = () => {
    console.clear();
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    this.handleSignUp(data);
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
            <Col size="md-12">
              <FormGroup>
                <Label for="singUpEmail">Email</Label>
                <Input type="email" name="email" id="singUpEmail" placeholder="Please enter your email" onChange={(e) => this.handleEmailChange(e)} />
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
                <Label for="verifyPassword">Password</Label>
                <Input type="password" name="password" id="verifyPassword" placeholder="Please verify your password " onChange={(e) => this.handleVerifyChange(e)} />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={() => this.handleSubmit()}>Sign in</Button>
        </Form>
      </div>
    );
  }
}
