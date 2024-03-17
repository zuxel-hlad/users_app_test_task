import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api';

export const getPosts = createAsyncThunk('posts/getPosts', async postId => {
    return await api.getPosts(postId);
});

export const getPost = createAsyncThunk('posts/getPost', async postId => {
    return await api.getPost(postId);
});

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: false
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,

    selectors: {
        postsState: state => state
    },

    extraReducers: ({ addCase, addDefaultCase }) => {
        addCase(getPosts.pending, state => {
            state.loading = true;
        });

        addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        });

        addCase(getPosts.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        addCase(getPost.pending, state => {
            state.loading = true;
        });

        addCase(getPost.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.post = payload;
        });

        addCase(getPost.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        addDefaultCase(() => {});
    }
});

const { reducer, selectors } = postsSlice;

export const { postsState } = selectors;

export default reducer;
