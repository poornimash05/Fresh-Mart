import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/productService';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;