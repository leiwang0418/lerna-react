import {
	createStore as createStoreCtl,
	combineReducers,
	applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './user/reducer';

const rootReducer = combineReducers({ user });

const createStore = () => {
	let composedEnhancers = applyMiddleware(thunk);
	if (process.env.NODE_ENV === 'development') {
		composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
	}

	return createStoreCtl(rootReducer, composedEnhancers);
};

export default createStore;
