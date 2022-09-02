import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPermissions } from '../redux/slices/permissionsSlice';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';

const Product = ({ product }) => {
    const permissions = useSelector(selectPermissions);
    const [productName, setProductName] = useState(product.name);
    const [productPrice, setProductPrice] = useState(product.price);
    const [productCurrency, setProductCurrency] = useState(product.currency);

    const noActions = !permissions.update && !permissions.delete;

    if (product.isUpdating) {
        return (
            <tr className="product-updating">
                <td>
                    <input
                        id="name"
                        placeholder={product.name}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        id="price"
                        placeholder={product.price}
                        onChange={(e) =>
                            setProductPrice(Number(e.target.value))
                        }
                    />
                </td>
                <td>
                    <select
                        id="currency"
                        name="currency"
                        placeholder={product.currency}
                        onChange={(e) => setProductCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </td>
                <td>
                    {permissions.update && (
                        <UpdateButton
                            product={product}
                            newProduct={{
                                name: productName,
                                price: productPrice,
                                currency: productCurrency,
                            }}
                        />
                    )}
                    {permissions.delete && <DeleteButton product={product} />}
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td id="name">{product.name}</td>
            <td id="price">{product.price}</td>
            <td id="currency">{product.currency}</td>
            {noActions ? (
                <td id="no-avail-actions">no available actions</td>
            ) : (
                <td id="actions">
                    {permissions.update && <UpdateButton product={product} />}
                    {permissions.delete && <DeleteButton product={product} />}
                    {noActions && 'no available actions'}
                </td>
            )}
        </tr>
    );
};

export default Product;
