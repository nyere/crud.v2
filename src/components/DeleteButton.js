import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/slices/productsSlice';

const DeleteButton = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="button">
            <button onClick={() => dispatch(deleteProduct(product))}>
                Delete
            </button>
        </div>
    );
};

export default DeleteButton;
