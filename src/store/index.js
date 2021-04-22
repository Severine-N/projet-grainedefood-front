/* eslint-disable no-underscore-dangle */
import { createStore,  applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
