import { UserState } from '../../pages/Home.container';
import { UserFormState } from '../../components/UserSelectionForm.container';

export function getUsername(state: UserFormState) {
	return state.user.name;
}

export function isEditingUsername(state: UserState) {
	return state.user.isEditing;
}
