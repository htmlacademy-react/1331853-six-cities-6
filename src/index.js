import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createApi} from './services/api';
import {requiredAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import thunk from 'redux-thunk';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';


const api = createApi(
    () =>
      store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH))
);


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.querySelector(`#root`)
);
