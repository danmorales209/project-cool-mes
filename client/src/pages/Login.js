import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Log In</h1>
            <form>
              <label for="user-name">Username</label>
              <input type="text" id="user-name" placeholder="username"></input>

              <label for="user-password">Password</label>
              <input type="text" id="user-password" placeholder="password"></input>

              <button type="submit">Login</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;