import {
	createStore as createStoreCtl,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './user/reducer';

const rootReducer = combineReducers({ user });

const createStore = () =>
	createStoreCtl(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default createStore;
