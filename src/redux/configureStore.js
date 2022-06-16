import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetingsReducer';

const store = createStore(greetingReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
