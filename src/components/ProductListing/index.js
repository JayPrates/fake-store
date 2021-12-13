import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Container } from './ProductListingStyles';

const ProductListing = () => {
    
    const products = useSelector((state) => state);
    console.log(products)
    
    return (
        <Container>
            <h1>Product Listing</h1>
            
        </Container>
    )
}

export default ProductListing;