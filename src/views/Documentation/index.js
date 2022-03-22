import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import Fallback from 'src/components/Fallback';

import Navigation from './components/Navigation';

import './documents.scss';

const Bootstrap = lazy(() => import('./docks/Bootstrap'));
const Theme = lazy(() => import('./docks/Theme'));

const navs = [
  ['bootstrap', '/'],
  ['theme', '/theme'],
];

const Documentation = () => {
  return (
    <Container fluid>
      <Row className="py-xl-5">
        <Col lg={2}>
          <Navigation navs={navs} />
        </Col>
        <Col lg={10}>
          <Suspense fallback={<Fallback />}>
            <Switch>
              <Route
                exact
                path="/docs"
                render={(props) =>
                  withTitle({
                    component: Bootstrap,
                    title: 'Bootstarp',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path="/docs/theme"
                render={(props) =>
                  withTitle({
                    component: Theme,
                    title: 'Theme',
                    ...props,
                  })
                }
              />
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
