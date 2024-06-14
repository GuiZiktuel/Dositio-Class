import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/auth';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';

const Products: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 29.99, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 39.99, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 49.99, category: 'Category 1' },
  ]);
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleCategoryChange = (category: string | null) => {
    setFilteredCategory(category);
  };

  const filteredProducts = filteredCategory
    ? products.filter(product => product.category === filteredCategory)
    : products;

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <h1>Products Page</h1>
      <ProductFilter categories={['Category 1', 'Category 2']} onCategoryChange={handleCategoryChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Products;
