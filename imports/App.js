import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '/imports/reducers';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import Screen1 from '/imports/views/screen1';
import Screen2 from '/imports/views/screen2';
import Screen3 from '/imports/views/screen3';

const history = createHistory();

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    })
);

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Screen1} />
                        <Route exact path="/screen2" component={Screen2} />
                        <Route exact path="/screen3" component={Screen3} />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}