import { takeLatest } from 'redux-saga/effects';
import { fetchProducts } from '../slices/productsSlice';
import handleFetchProducts from './handlers/handleFetchProducts';

export default function* rootSaga() {
    yield takeLatest(fetchProducts.type, handleFetchProducts);
}
