import React, { useState } from 'react';
import Product from './Product';

const Products = ({ products }) => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <button onClick={() => setView('grid')}>Grid View</button>
      <button onClick={() => setView('list')}>List View</button>
      <div className={view === 'grid' ? 'grid' : 'list'}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
