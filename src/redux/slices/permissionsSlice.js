import { createSlice } from '@reduxjs/toolkit';

// store
const initialState = {
    create: true,
    read: true,
    update: true,
    delete: true,
};

export const permissionsSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
        // if the app was to obtain the permissions from an API, the flow would be similar to fetchProducts from ./productsSlice.js
        // in this case, permissions are set in initialState for easier testing
        fetchPermissions: (state, action) => {},
    },
    extraReducers: {},
});

// selectors
export const selectPermissions = (state) => state.permissions;
export const selectCreatePermission = (state) => state.permissions.create;

// exports

export default permissionsSlice.reducer;
