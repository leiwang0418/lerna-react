import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
	username: string;
}

const initialState: UserState = {
	username: 'leiwang0418',
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
	},
});

export const { setUsername } = UserSlice.actions;

export const selectUsername = (state: RootState) => state.user.username;

export default UserSlice.reducer;
