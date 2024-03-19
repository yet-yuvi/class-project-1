import { ProductCard } from './productCard/ProductCard';

import { Box } from '../../ui';
import { useProducts } from '../../hooks';
import './Products.css';

export const Products = () => {
  const { products } = useProducts();
  
  return (
    <div className="products">
      <Box flexWrap="wrap" gap={2} justifyContent="center">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </div>
  );
};