import React from 'react';

interface ProductFilterProps {
  categories: string[];
  onCategoryChange: (category: string | null) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    onCategoryChange(category === 'all' ? null : category);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
