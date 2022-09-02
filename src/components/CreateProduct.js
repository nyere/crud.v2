import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/slices/productsSlice';

const CreateProduct = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [currency, setCurrency] = useState('USD');

    return (
        <div id="create" className="CreateProduct">
            <h2>Create New Product</h2>
            <input
                className="create--input"
                id="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="create--input"
                id="price"
                placeholder="Price"
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <select
                className="create--input"
                id="currency"
                name="currency"
                onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
            <button
                className="button--create"
                onClick={() =>
                    dispatch(
                        createProduct({
                            name: name,
                            price: price,
                            currency: currency,
                        })
                    )
                }
            >
                Create Product
            </button>
        </div>
    );
};

export default CreateProduct;
