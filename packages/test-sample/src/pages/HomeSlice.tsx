import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
	username: string;
	isEditing: boolean;
}

const initialState: UserState = {
	username: 'leiwang0418',
	isEditing: true
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
			state.isEditing = !state.isEditing;
		},
	},
});

export const { setUsername } = UserSlice.actions;

export const selectUsername = (state: RootState) => state.user.username;
export const selectIsEditing = (state: RootState) => state.user.isEditing;

export default UserSlice.reducer;
