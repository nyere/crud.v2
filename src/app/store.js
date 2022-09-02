import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../redux/sagas/rootSaga';
import productsReducer from '../redux/slices/productsSlice';
import permissionsSlice from '../redux/slices/permissionsSlice';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        products: productsReducer,
        permissions: permissionsSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(saga),
});

saga.run(rootSaga);
