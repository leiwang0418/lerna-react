import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

interface ErrorMessage {
  message: string;
  documentation_url: string;
}

export interface RepositoriesState {
  repositories: Repository[];
  isFetching: boolean;
  fetchError: boolean;
}

const initialState: RepositoriesState = {
  repositories: [],
  isFetching: false,
  fetchError: false,
};

export const fetchRepositories = createAsyncThunk<
  Repository[] | ErrorMessage,
  string
>("repositories/fetchRepositories", async (username) => {
  const url = `https://api.github.com/users/${username}/repos?sort=updated_at&order=desc`;
  const response = await fetch(url);
  return (await response.json()) as Promise<Repository[]>;
});

const RepositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        if(action.payload instanceof Array) {
         state.repositories = action.payload;
        }
        state.fetchError = false;
        state.isFetching = false;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.fetchError = true;
      });
  },
});

export const getList = (store: RootState) => store.repositories.repositories;
export const isFetching = (store: RootState) => store.repositories.isFetching;
export const fetchError = (store: RootState) => store.repositories.fetchError;

export default RepositoriesSlice.reducer;
