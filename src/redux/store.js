import { createStore } from 'redux';
import greetingReducer from './greetingReducer';

const store = createStore(greetingReducer);

export default store;
