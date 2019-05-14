import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import LogInCarousel from "../components/LogInCarousel";
// import { LogInCarousel } from "../components/LogInCarousel";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col md={12}>
            <LogInCarousel>
            </LogInCarousel>
          </Col>
        </Row>
        <Form>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Sign in</Button>
        </Form>
      </div>
    );
  }
}
