import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import Input from 'src/components/Input/Input';
import { signup } from '../../actions';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('8475dfuybvbb7868vn67n9787c');
  const [check, setCheck] = useState(null);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  let condition;
  if (user.message) {
    condition = <p>message...!</p>;
  }
  if (user.loading) {
    condition = <p>{user.message}...!</p>;
  }
  console.log(user.message);
  return (
    <Layout>
      <section className="admin">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              {user.message && (
                <Alert variant="success">
                  <Alert.Heading>{user.message}</Alert.Heading>
                </Alert>
              )}
            </Col>
            <Col>
              <h1>Admin Login</h1>
            </Col>
            <Col
              md={{ span: 6, offset: 3 }}
              className="shadow-lg py-5 mt-5 px-5"
            >
              {check === token ? (
                <Form onSubmit={userSignup}>
                  <Row>
                    <Col md={6}>
                      <Input
                        label="First Name"
                        placeholder="First Name"
                        value={firstName}
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        errorMessage=""
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        label=" Last Name"
                        placeholder=" Last Name"
                        value={lastName}
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        errorMessage=""
                      />
                    </Col>
                  </Row>
                  <Input
                    label="Email"
                    placeholder="Email"
                    value={email}
                    type="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage=""
                  />
                  {/* {condition} */}
                  <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    type="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    errorMessage=""
                  />
                  <Button variant="primary" type="submit" className="mt-4">
                    Submit
                  </Button>
                </Form>
              ) : (
                <div className="mb-3">
                  <p className="text-warning">
                    You Must Need Access Token For Admin SignUp
                  </p>
                  <input
                    placeholder="admin token"
                    onChange={(e) => setCheck(e.target.value)}
                    className="p-3 w-100"
                  />
                </div>
              )}

              <div md={12} className="text-center">
                are you user?
                <h6 className="d-inline">
                  <Link to="userSignup" className="text-decoration-none">
                    signUp here
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

export default Signup;
