import ACTION_TYPES from './actionType';

interface User {
	name: string;
	isEditing: boolean;
}

export function setUsername(user: User) {
	return { type: ACTION_TYPES.SET_NAME, user };
}

export function setIsEditingUsername(user: User) {
	return {
		type: ACTION_TYPES.SET_EDITING_NAME,
		user
	};
}

export type UserAction = { type: string; user: User };
export type UserState = User;
