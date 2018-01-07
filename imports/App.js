import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer } from 'react-router-redux'
import { FocusStyleManager } from "@blueprintjs/core"
import reducers from '/imports/reducers'
import createHistory from 'history/createBrowserHistory'
import Main from './views/main'
import Screen2 from '/imports/views/screen2'
import Screen3 from '/imports/views/screen3'

FocusStyleManager.onlyShowFocusOnTabs();

const history = createHistory()
const appReducer = combineReducers({ ...reducers, router: routerReducer })
let   store

if (process.env.NODE_ENV === 'development') {
    store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
else {
    store = createStore(appReducer)
}

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/screen2" component={Screen2} />
                        <Route exact path="/screen3" component={Screen3} />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}