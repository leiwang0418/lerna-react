import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/userSelectionSlice";
import repositoriesReducer from "../pages/publicRepositoriesListSlice";

export const rootReducer = { user: userReducer, repositories: repositoriesReducer };

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
