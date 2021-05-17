interface State {
	user: { isEditing: boolean; name: string };
}

export function isEditingUsername(state: State): boolean {
	return state.user.isEditing;
}
