import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, turnIsUpdating } from '../redux/slices/productsSlice';

const UpdateButton = ({ product, newProduct }) => {
    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        if (!product.isUpdating) {
            dispatch(turnIsUpdating(product.id));
        }
        if (product.isUpdating) {
            dispatch(updateProduct({ ...newProduct, id: product.id }));
        }
    };

    return (
        <div className="button">
            <button onClick={handleUpdateClick}>
                {product.isUpdating ? 'Save' : 'Update'}
            </button>
        </div>
    );
};

export default UpdateButton;
