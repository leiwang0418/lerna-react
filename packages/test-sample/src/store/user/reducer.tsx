import ACTION_TYPE from './actionType';
import { DefaultRootState } from 'react-redux';
import { UserAction, UserState } from './actions'


const initialState: UserState = {
	name: 'leiwang0418',
	isEditing: true,
};

const reducer = (
	state = initialState, { type, user }: UserAction
) => {
	switch (type) {
		case ACTION_TYPE.SET_NAME:
			return {
				...state,
				name: user.name,
				isEditing: false,
			};
		case ACTION_TYPE.SET_EDITING_NAME:
			return {
				...state,
				isEditing: user.isEditing,
			};
		default:
			return state;
	}
};

export default reducer;
