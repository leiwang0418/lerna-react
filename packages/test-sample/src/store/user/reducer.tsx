import ACTION_TYPE from './actionType';
import { DefaultRootState } from 'react-redux';
import { Action, Reducer } from 'redux';

interface InitialState extends DefaultRootState {
	name: string | Partial<InitialState>;
	isEditing: boolean | Partial<InitialState>;
}

const initialState: InitialState = {
	name: 'leiwang0418',
	isEditing: true,
};

interface DispatchAction extends Action {
	payload: Partial<InitialState>;
}

const reducer: Reducer<InitialState, DispatchAction> = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case ACTION_TYPE.SET_NAME:
			return {
				...state,
				name: payload,
				isEditing: false,
			};
		case ACTION_TYPE.SET_EDITING_NAME:
			return {
				...state,
				isEditing: payload,
			};
		default:
			return state;
	}
};

export default reducer;
