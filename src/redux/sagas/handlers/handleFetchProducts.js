import { call, put, delay } from 'redux-saga/effects';
import { setProducts, setError } from '../../slices/productsSlice';
import { requestFetchProducts } from '../requests/requestFetchProducts';

export default function* handleFetchProducts() {
    try {
        yield delay(1500);
        const products = yield call(requestFetchProducts);
        const productsJson = yield products.json();
        yield put(setProducts(productsJson));
    } catch (error) {
        yield put(setError());
    }
}
