import React from 'react';
import { addToCart } from '../../services/cartService';

const ProductItem = ({ product }) => {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;