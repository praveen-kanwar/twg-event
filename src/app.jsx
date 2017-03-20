import React, {Component} from 'react';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link, Redirect} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {render} from 'react-dom';

import AppContainer from './containers/AppContainer';
import MainContainer from './containers/MainContainer';
import NewEventContainer from './containers/NewEventContainer'
import UpcomingEventsContainer from './containers/UpcomingEventsContainer'
import CalendarEventsContainer from './containers/CalendarEventsContainer'
import App from './components/App';
import C from './config/constants';
import history from './history/history';
import auth from './authentication/auth';
import rootReducer from './reducers/index';
import {
  listeningToAuth,
  loginSuccess,
  logout
} from './actions/actions';

const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer, {}, window.devToolsExtension && window.devToolsExtension());

const logPageView = () => {
    console.log("Router onUpdate");
};

const routes = (
    <Router history={history} onUpdate={logPageView}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={MainContainer}/>

            <Route path="newEvent" component={NewEventContainer} onEnter={auth.checkAuth}/>
            <Route path="upcoming-events" component={UpcomingEventsContainer} onEnter={auth.checkAuth}/>
            <Route path="calendar-view" component={CalendarEventsContainer} onEnter={auth.checkAuth}/>

        </Route>
    </Router>
);

render(
    <Provider store={store}>
    {routes}
    </Provider>,
    document.getElementById("root")
  );

store.dispatch(listeningToAuth());

// Start listening to firebase auth changes.
C.FIREBASE.auth().onAuthStateChanged((user) => {
    // If logged in.
    if (user) {
        store.dispatch(loginSuccess(user));
    } else {
        C.FIREBASE.auth().getRedirectResult().then(function(result) {
            if (!result.user) {
                store.dispatch(logout());
            } else {
                store.dispatch(loginSuccess(result.user));
            }
        });
    }
}, err => {
    console.log(err);
});
