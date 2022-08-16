import React from 'react';
import 'styles/index.scss';
import { Navigate, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateSession } from 'modules/session/actions';
import ApiCalls from 'routes/ApiCalls';
import Home from 'routes/Home';
/* qwerty for the future 
import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header'; */

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.session.authenticated,
    sessionChecked: state.session.checked,
    user: state.session.user,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    checkSession: bindActionCreators(validateSession, dispatch),
  };
}
interface IAppProps {
  isAuthenticated: boolean;
  sessionChecked: boolean;
  checkSession: () => void;
  user: any;
}
function App({ isAuthenticated, sessionChecked, user }: IAppProps) {
  return (
    <>
      {/* qwerty for the future <Loading /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path={'api-calls'} element={<ApiCalls />} />
        {/* {sessionChecked && routes.map((route, index) => {
            switch (route.type) {
              case ROUTE_TYPE_REDIRECT:
                return (
                  <Navigate key={index} to={route.to}/>
                );

              default:
                return (
                  <Route
                    key={index}
                    path={"api-calls"}
                  />
                );
            }
          })} */}
      </Routes>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
