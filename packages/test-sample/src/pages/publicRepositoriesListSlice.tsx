import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchRepositories } from './publicRepositoriewListAPI';

export interface RepositoriesState {
	repositories: any;
	isFetching: boolean;
	fetchError: boolean;
}

const initialState: RepositoriesState = {
	repositories: 'any',
	isFetching: false,
	fetchError: false,
};

// const url = `https://api.github.com/users/${username}/repos?sort=updated_at&order=desc`;
// 参考：https://redux-toolkit.js.org/api/createAsyncThunk
const getRepositories = createAsyncThunk(
	'repositories/fetchRepositories',
	async () => {
		const response = await fetchRepositories();

		// return response.data;
	}
);

const RepositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {},
});

const getList = (store: RootState) => store.repositories.repositories;
const isFetching = (store: RootState) => store.repositories.isFetching;
const hasError = (store: RootState) => store.repositories.fetchError;

export default RepositoriesSlice.reducer;
