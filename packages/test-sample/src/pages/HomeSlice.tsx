import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface HomeState {
	isEditing: boolean;
}

const initialState: HomeState = {
	isEditing: true,
};

const HomeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
});

export const selectIsEditing = (state: RootState) => state.home.isEditing;

export default HomeSlice.reducer;
