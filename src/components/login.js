import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const LoginForm = () => (
  <div className="login-page mt-5 text-center">
    <Container>
      <Form>
        <h4>Login Page</h4>
        <input type="text" placeholder="Enter a username" />
        <br />
        <Button className="mt-3 btn btn-blmd ripple-effect blue btn-lg btn-block" type="submit">LOGIN</Button>
      </Form>
    </Container>
  </div>
);
export default LoginForm;
