import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/homeSlice';
import repositoriesReducer from '../pages/publicRepositoriesListSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		repositories: repositoriesReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;