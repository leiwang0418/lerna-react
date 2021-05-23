import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { fetchRepositories } from './publicRepositoriewListAPI';

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
// const getRepositories = createAsyncThunk(
// 	'repositories/fetchRepositories',
// 	async () => {
// 		const response = await fetchRepositories();

// 		// return response.data;
// 	}
// );

export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  // if you type your function argument here
  async (username: string) => {
  	// const url = `https://api.github.com/users/${username}/repos?sort=updated_at&order=desc`;
    const url = `https://reqres.in/api/users/${username}`;
    const response = await fetch(url);
    // console.log(response.json())
    return (await response.json()) as any;
  }
)

const RepositoriesSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      console.log(action.payload);
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
  },
});

const getList = (store: RootState) => store.repositories.repositories;
const isFetching = (store: RootState) => store.repositories.isFetching;
const hasError = (store: RootState) => store.repositories.fetchError;

export default RepositoriesSlice.reducer;
