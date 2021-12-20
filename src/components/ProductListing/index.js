import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Container } from './ProductListingStyles';
import ProductComponent from '../ProductComponent.js';
import useSWR from 'swr';
import {fetcher} from '../../lib/fetcher'
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    
    const dispatch = useDispatch()
    const products = useSelector((state) => state);

    const { data } = useSWR('/api/fakestore', fetcher);
    
    useEffect(() => {
        dispatch(setProducts(data))        
    }, [data]);

    
    console.log('Products: ', products);
    
    return (
        <Container>
            <h1>Product Listing</h1>
            <ProductComponent />
        </Container>
    )
}

export default ProductListing;