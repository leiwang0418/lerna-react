import {
	createStore as createStoreCtl,
	combineReducers,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import user from './user/reducer';

const rootReducer = combineReducers({user});

const createStore = () => createStoreCtl(rootReducer, applyMiddleware(thunk));

export default createStore;
