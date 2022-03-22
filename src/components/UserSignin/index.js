import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from 'src/components/Layout/Layout';
import Input from 'src/components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import { Userlogin } from '../../actions';

import css from './style.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const userFormLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(Userlogin(user));
    if (!auth.authenticate) {
      setError('Information Incorrect');
      // return <Redirect to={`/`} />;
    }
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <section className="signin">
        <Container>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
              className="bg-dark shadow-lg py-5 mt-5 px-5"
            >
              <Form onSubmit={userFormLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage=""
                  className="py-5"
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage=""
                  className="py-5"
                />
                <p className="text-warnning">{error}</p>
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
              <div md={12} className="text-center">
                are you admin?
                <h6 className="d-inline">
                  <Link to="signin" className="text-decoration-none">
                    login here
                  </Link>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Signin;
