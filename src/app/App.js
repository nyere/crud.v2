import React, { useEffect } from 'react';
import './App.css';
import Products from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import { selectCreatePermission } from '../redux/slices/permissionsSlice';
import CreateProduct from '../components/CreateProduct';

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.products.isLoading);
    const canRead = useSelector((state) => state.permissions.read);
    const canCreate = useSelector(selectCreatePermission);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div id="App">
                <div class="container">
                    <div class="spinner-frame">
                        <div class="spinner-cover"></div>
                        <div class="spinner-bar"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!canRead) {
        return <div className="no-read-perm">¯\_(ツ)_/¯</div>;
    }

    return (
        <div id="App">
            <Products />
            {canCreate && <CreateProduct />}
        </div>
    );
}

export default App;
