import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/HomeSlice';

export const store = configureStore({
	reducer: {
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
