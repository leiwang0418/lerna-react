import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../pages/HomeSlice';
import userReducer from '../components/UserSelectFormSlice';

export const store = configureStore({
	reducer: {
		home: homeReducer,
		user: userReducer,
	},
});

// const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer,
//   }
// })

export type RootState = ReturnType<typeof store.getState>;
