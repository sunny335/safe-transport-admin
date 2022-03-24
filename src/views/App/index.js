import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'src/assets/scss/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';

import Signin from 'src//containers/Signin/Signin';

import userAuthReducer from 'src/reducers/userAuth.reducer';

import DashboardRoutes from '../Dashboard';
import { isUserLoggedIn, isUserFormLoggedIn } from '../../actions';
// Pages

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userauth = useSelector((state) => state.userAuth);
  console.log('userauth', userauth.user);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (!userAuthReducer.authenticate) {
      dispatch(isUserFormLoggedIn());
    }
  }, []);
  document.body.setAttribute('data-theme', 'dark');

  // if (auth.authenticate) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Router>
          <Switch>
            {/* Page routes */}

            {auth?.user.role == 'admin' ? (
              <Route
                path={['/dashboard', '/']}
                render={(props) =>
                  withTitle({
                    component: DashboardRoutes,
                    title: 'Docs',
                    ...props,
                  })
                }
              />
            ) : (
              <Route
                exact
                path={['/signin', '/']}
                render={(props) =>
                  withTitle({
                    component: Signin,
                    title: 'Docs',
                    ...props,
                  })
                }
              />
            )}

            {/* Default 404 */}
            <Route
              render={(props) =>
                withTitle({
                  component: NotFound,
                  title: '404 Error',
                  ...props,
                })
              }
            />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
