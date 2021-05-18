import { UserState } from '../../page/Home.container';

export function isEditingUsername(state: UserState) {
	return state.user.isEditing;
}
