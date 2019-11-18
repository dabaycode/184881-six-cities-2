import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from '../api';

const api = createAPI((store, ...args) => store.dispatch(...args));

export default createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));
