import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ProductDetails from '../../pages/productdetails/[details]';

const ProductComponent =  () => {
    const products = useSelector((state) => state.allProducts.products);
    return (
        <div>
     {products && products.map((product) => {
        const {id, title, image, price, category} = product;
        return (
                <Link href={{pathname: `/productdetails/${id}`, query: {id}}} component={ProductDetails}>
            <div className='four column wide' key={id}>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <div className='meta price'>$ {price}</div>
                        <div className='meta'>{category}</div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
        )
    })}
    </div>
    /* const { id, title } = products[0]; */
)}


export default ProductComponent;