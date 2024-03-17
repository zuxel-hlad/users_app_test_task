import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api';

export const getAlbums = createAsyncThunk('albums/getAlbums', async userId => {
    return await api.getAlbums(userId);
});

export const getAlbum = createAsyncThunk('albums/getAlbum', async albumId => {
    return await api.getAlbum(albumId);
});

const initialState = {
    albums: [],
    album: null,
    loading: false,
    error: false
};

const albumsSlice = createSlice({
    name: 'albums',
    initialState,

    selectors: {
        albumsState: state => state
    },

    extraReducers: ({ addCase, addDefaultCase }) => {
        addCase(getAlbums.pending, state => {
            state.loading = true;
        });

        addCase(getAlbums.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.albums = payload;
        });

        addCase(getAlbums.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        addCase(getAlbum.pending, state => {
            state.loading = true;
        });

        addCase(getAlbum.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.album = payload;
        });

        addCase(getAlbum.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        addDefaultCase(() => {});
    }
});

const { reducer, selectors } = albumsSlice;

export const { albumsState } = selectors;

export default reducer;
