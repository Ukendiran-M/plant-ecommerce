import React from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
    { id: '1', name: 'Monstera', price: 25, category: 'Large', image: '/assets/new1.jpeg' },
    { id: '2', name: 'Snake Plant', price: 15, category: 'Medium', image: '/assets/new2.jpeg' },
    { id: '3', name: 'Fiddle Leaf Fig', price: 40, category: 'Large', image: '/assets/new3.jpeg' },
    { id: '4', name: 'Peace Lily', price: 20, category: 'Medium', image: '/assets/new4.jpeg' },
    { id: '5', name: 'Spider Plant', price: 10, category: 'Small', image: '/assets/new5.jpeg' },
    { id: '6', name: 'Aloe Vera', price: 12, category: 'Small', image: '/assets/new6.jpeg' },
];
  

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => dispatch(addItem(product))}
        />
      ))}
    </div>
  );
};

export default ProductListingPage;
