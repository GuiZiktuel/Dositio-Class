
import React from 'react';

interface ProductItemProps {
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price }) => {
  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
