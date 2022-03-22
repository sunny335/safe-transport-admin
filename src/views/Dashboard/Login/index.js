import { Card } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardHeader, Col, Row } from 'reactstrap';

const Login = () => {
  const data = useSelector((store) => store.loginInfo);

  return (
    <Row>
      <Col md={12} className="text-center my-5">
        <h2>Login Lists</h2>
      </Col>
      {data &&
        data.map((item) => (
          <Col md={3}>
            <Card>
              <CardHeader>Name: {item.fullname}</CardHeader>
              <h6>Email: {item.email}</h6>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default Login;
