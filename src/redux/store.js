import { configureStore } from '@reduxjs/toolkit';
import users from './slices/users';
import albums from './slices/albums';
import posts from './slices/posts';

export const store = configureStore({
    reducer: { users, albums, posts },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});
