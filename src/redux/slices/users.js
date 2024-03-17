import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { api } from '@/api';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    return await api.getUsers();
});

const initialState = {
    users: [],
    sort: '',
    search: '',
    loading: false,
    error: false
};

const usersSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        setSort: (state, { payload }) => {
            state.sort = payload;
        },

        setSearch: (state, { payload }) => {
            state.search = payload;
        }
    },

    selectors: {
        users: state => state.users,
        sort: state => state.sort,
        search: state => state.search,
        usersState: state => state
    },

    extraReducers: ({ addCase, addDefaultCase }) => {
        addCase(getUsers.pending, state => {
            state.loading = true;
        });

        addCase(getUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.users = payload;
        });

        addCase(getUsers.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        addDefaultCase(() => {});
    }
});

const { reducer, selectors, actions } = usersSlice;

export const { users, error, loading, search, sort, usersState } = selectors;
export const { setSearch, setSort } = actions;

export const memoizedUsers = createSelector(users, sort, search, (users, sort, search) => {
    const searchedUsers = users.filter(user => {
        if (search) {
            return user.username.toLowerCase().includes(search.toLowerCase());
        }
        return user;
    });
    return searchedUsers.sort((a, b) => {
        if (sort === 'asc') {
            return a.username.localeCompare(b.username);
        } else if (sort === 'desc') {
            return b.username.localeCompare(a.username);
        }
        return 0;
    });
});

export default reducer;
