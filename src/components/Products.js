import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../redux/slices/productsSlice';
import Product from './Product';

const Products = () => {
    const products = useSelector(selectProducts);

    if (products.length === 0) {
        return (
            <div className="products">
                <h2>Products</h2>
                <div className="no-avail-products">No available products</div>
            </div>
        );
    }

    return (
        <div className="products">
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
