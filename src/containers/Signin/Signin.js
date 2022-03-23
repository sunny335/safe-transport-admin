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
              md={12}
              className="text-center text-white d-flex align-items-center justify-content-center"
            >
              <span>
                <svg
                  width="148"
                  height="148"
                  viewBox="0 0 148 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_216_5088)">
                    <path
                      d="M67.007 71.874L67.0044 71.8713C63.7155 68.451 61.5623 65.9462 60.1319 63.8375C58.7323 61.7743 58.0074 60.0647 57.6227 58.2029C57.2488 56.3938 57.3989 55.4556 57.785 55.0203C58.153 54.6054 58.8442 54.5293 60.0315 54.9226C61.2178 55.3156 62.0389 55.8918 62.6468 56.6416C63.2903 57.4352 63.8907 58.6607 64.2828 60.5581L64.8777 63.4366L65.0801 64.4159L66.0294 64.7304L74.09 67.4005L75.0393 67.715L74.8369 66.7357L74.3577 64.4169C73.4037 59.8008 71.5635 55.6633 68.7454 52.2692C65.9056 48.8491 62.2369 46.3802 57.8968 44.9425C53.5582 43.5053 50.378 43.704 48.5564 45.5476C46.7428 47.3832 46.3724 50.7524 47.3141 55.3095C48.0039 58.6472 49.2151 61.7559 51.3793 65.1883C53.5251 68.5914 56.5686 72.2503 60.846 76.7144L60.8486 76.7171C64.1361 80.1359 66.2611 82.6254 67.6809 84.7841C69.0706 86.8974 69.8197 88.7479 70.2685 90.9195C70.675 92.8864 70.4981 93.8657 70.0851 94.3088C69.6877 94.735 68.9551 94.7861 67.7542 94.3883C66.5526 93.9902 65.684 93.408 65.0406 92.6486C64.3776 91.8661 63.7525 90.6597 63.3644 88.7814L62.5712 84.9434L62.3688 83.9641L61.4196 83.6497L53.3589 80.9795L52.4097 80.665L52.6121 81.6444L53.273 84.8427C54.2278 89.4629 56.0897 93.609 58.9392 97.0129C61.8079 100.44 65.513 102.919 69.8889 104.368C74.2638 105.818 77.485 105.634 79.3284 103.758C81.1634 101.89 81.5344 98.4457 80.5605 93.733C79.8165 90.1329 78.6068 86.9136 76.4494 83.4305C74.3093 79.9753 71.2837 76.3374 67.007 71.874ZM89.5453 102.713L89.8308 104.493L91.1575 104.08L99.2474 101.565L99.6411 101.442L99.5496 100.912L93.6691 66.8103L101.668 69.46L102.617 69.7744L102.415 68.7951L100.762 60.7993L100.56 59.82L99.6107 59.5055L73.2587 50.7761L72.3094 50.4617L72.5118 51.441L74.1642 59.4368L74.3666 60.4161L75.3159 60.7306L83.2308 63.3525L89.5453 102.713Z"
                      fill="#028E3A"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                  <circle
                    r="32.9975"
                    transform="matrix(0.993887 0.110405 -0.00546379 0.999985 73.5426 73.9938)"
                    stroke="url(#paint0_linear_216_5088)"
                    strokeWidth="8"
                  />
                  <defs>
                    <filter
                      id="filter0_d_216_5088"
                      x="41.8427"
                      y="42.9679"
                      width="65.9261"
                      height="71.3885"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_216_5088"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_216_5088"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_216_5088"
                      x1="36.9975"
                      y1="0"
                      x2="36.9975"
                      y2="73.9949"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18F78C" />
                      <stop offset="1" stopColor="#003BD3" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h1>Admin Login</h1>
            </Col>
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
