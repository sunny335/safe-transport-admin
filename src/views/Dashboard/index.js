import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';

import Layout from 'src/components/Layout/Layout';
import Sidebar from './Sidebar';

const Dashboard = lazy(() => import('./PostsList'));
// const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const PublicsignUp = lazy(() => import('./UserSignUp'));
const Allreport = lazy(() => import('./AllReport'));
// const Applications = lazy(() => import('./Applications'));
// const ProfileSetting = lazy(() => import('./ProfileSetting'));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  const auth = useSelector((state) => state.auth);
  if (!auth?.user.role) {
    return <Redirect to="/signin" />;
  }

  return (
    <Layout>
      <Container className="pt-8  dashboard" fluid>
        <Row className="pt-5">
          <Col lg={2} md={12} sm={12} className="sidebar">
            <Sidebar />
          </Col>
          <Col lg={10} md={12} sm={12} className="px-4 admin-main">
            <Switch>
              <Route
                exact
                path={`${path}`}
                render={(props) =>
                  withTitle({
                    component: SignUp,
                    title: 'Admin Dashboard',
                    ...props,
                  })
                }
              />
              {/* <Route
              exact
              path={`${path}/login`}
              render={(props) =>
                withTitle({
                  component: Login,
                  title: 'Employer Dashboard',
                  ...props,
                })
              }
            /> */}
              <Route
                exact
                path={`${path}/signup`}
                render={(props) =>
                  withTitle({
                    component: Dashboard,
                    title: 'Employer Dashboard',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/publicUser`}
                render={(props) =>
                  withTitle({
                    component: PublicsignUp,
                    title: 'Employer Dashboard',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/Allreport`}
                render={(props) =>
                  withTitle({
                    component: Allreport,
                    title: ' Dashboard',
                    ...props,
                  })
                }
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DashboardRoutes;
