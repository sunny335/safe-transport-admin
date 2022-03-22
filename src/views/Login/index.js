import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Container } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { addInfo } from 'src/state/ducks/userInfo';
import Row from 'reactstrap/lib/Row';

let id = 0;

const Login = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (data) => {
    id++;
    data.id = id;
    dispatch(addInfo(data));
    reset();
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="fname"
              placeholder="first name"
              ref={register}
            />
            <div>
              <input
                type="text"
                name="lname"
                placeholder="last  name"
                ref={register({ minLength: 5 })}
              />
              {errors.lname && (
                <p className="text-warning">last name minLength:5</p>
              )}
            </div>
            <input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your email"
              ref={register}
              className="d-block"
            />
            {console.log('err', errors.lname && 'not found')}

            <Button type="submit">Submit</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
