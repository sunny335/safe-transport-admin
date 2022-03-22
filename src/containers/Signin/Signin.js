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
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(Userlogin(user));
  };

  // console.log('fdsf', auth?.user.role == 'admin');
  if (auth?.user.role == 'admin') {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <section className="admin">
        <Container>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
              className=" shadow-lg py-5 mt-5 px-5"
            >
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  errorMessage=""
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  errorMessage=""
                />
                {auth?.user.role && auth?.user.role !== 'admin' && (
                  <p style={{ color: '#FF0000' }}>
                    Please enter valid information
                  </p>
                )}
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signin;
