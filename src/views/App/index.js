import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'src/assets/scss/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import withTitle from 'src/components/TitleComponent';

import Signin from 'src//containers/Signin/Signin';
import Signup from 'src//containers/Signup/Signup';
import UserSignin from 'src/components/UserSignin';
import UserSignup from 'src/components/userSignUp';
import userAuthReducer from 'src/reducers/userAuth.reducer';
// import PostDetails from 'src/components/PostDetails/PostDetails';
// import SearchProperty from '../SearchProperty';
// import CreatePost from '../CreatePost';
// import PropertyDetails from '../PropertyDetails';
// import ViewProfile from '../ViewProfile';
// import sellerprofile from '../SellerProfile';
import DashboardRoutes from '../Dashboard';
import { isUserLoggedIn, isUserFormLoggedIn } from '../../actions';
// Pages
const Docs = lazy(() => import('../Documentation'));
const Home = lazy(() => import('../Home'));

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
            {/* <Route
              exact
              path={['/home', '/user', '/admin', '/']}
              render={(props) =>
                withTitle({
                  component: Home,
                  title: 'Welcome',
                  ...props,
                })
              }
            /> */}

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

            {/* <Route
              path="/Signup"
              render={(props) =>
                withTitle({
                  component: Signup,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}
            {/* <Route
              path="/userSignup"
              render={(props) =>
                withTitle({
                  component: UserSignup,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}
            {/* <Route
              path="/UserSignin"
              render={(props) =>
                withTitle({
                  component: UserSignin,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              path="/searchProperty"
              render={(props) =>
                withTitle({
                  component: SearchProperty,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              path="/property/:id"
              render={(props) =>
                withTitle({
                  component: PropertyDetails,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}
            {/* <Route
              path="/sellerprofile/:id"
              render={(props) =>
                withTitle({
                  component: sellerprofile,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              path="/createpost"
              render={(props) =>
                withTitle({
                  component: CreatePost,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}
            {/* <Route
              path="/posts/:id"
              render={(props) =>
                withTitle({
                  component: PostDetails,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}
            {/* <Route
              path="/profile"
              render={(props) =>
                withTitle({
                  component: ViewProfile,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}

            {/* Doc Page */}
            {/* <Route
              path="/docs"
              render={(props) =>
                withTitle({
                  component: Docs,
                  title: 'Docs',
                  ...props,
                })
              }
            /> */}

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
