import { createSlice } from '@reduxjs/toolkit';

// store
const initialState = {
    products: [
        // example product { id: 1, name: 'PS', price: 500, currency: 'USD', isUpdating: false },
    ],
    isLoading: false,
    fetchError: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state) => {
            state.isLoading = true;
            state.fetchError = false; // in case of a previous error and if a retry mechanism was made available
        },
        setProducts: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        // no html for error state but I have created the following action creator and included in error handling as part of handleFetchProducts
        setError: (state) => {
            state.isLoading = false;
            state.fetchError = true;
        },
        updateProduct: (state, action) => {
            const indexOfProduct = state.products.findIndex((object) => {
                return object.id === action.payload.id;
            });
            state.products[indexOfProduct] = {
                ...action.payload,
                isUpdating: false,
            };
        },
        deleteProduct: (state, action) => {
            const updatedProducts = state.products.filter((product) => {
                return product.id !== action.payload.id;
            });
            state.products = updatedProducts;
        },
        createProduct: (state, action) => {
            let id = Object.keys(state.products).length;
            // needed in order to ensure that id is not duplicated
            state.products.forEach((product) => {
                if (product.id === id) {
                    id++;
                }
            });
            // checking whether a number was provided to price and if not, displaying 'n/a'
            const price = Number.isNaN(action.payload.price)
                ? 'n/a'
                : action.payload.price;
            state.products.push({
                ...action.payload,
                price,
                id,
                isUpdating: false,
            });
        },
        turnIsLoaidngOn: (state) => {
            return { ...state, isLoading: true }; // although Immer takes care of immutable udpates
        },
        turnIsLoaidngOff: (state) => {
            return { ...state, isLoading: false };
        },
        turnIsUpdating: (state, action) => {
            const indexOfProduct = state.products.findIndex((object) => {
                return object.id === action.payload;
            });
            state.products[indexOfProduct].isUpdating =
                !state.products[indexOfProduct].isUpdating;
        },
    },
    extraReducers: {},
});

// selectors
export const selectProducts = (state) => state.products.products;
export const selectIsLoading = (state) => state.products.isLoading;

// exports
export const {
    fetchProducts,
    setProducts,
    setError,
    addProduct,
    updateProduct,
    deleteProduct,
    createProduct,
    turnIsLoaidngOn,
    turnIsLoaidngOff,
    turnIsUpdating,
} = productsSlice.actions;

export default productsSlice.reducer;
