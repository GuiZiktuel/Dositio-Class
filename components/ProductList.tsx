// components/ProductList.tsx
import React from 'react';
import ProductItem from './ProductItem';
import styles from '../styles/products.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
