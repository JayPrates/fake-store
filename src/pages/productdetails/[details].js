import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../components/redux/actions/productActions';



const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const router = useRouter();
    console.log(router.query.id);
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${router.query.id}`)
        dispatch(selectedProduct(res.data));
    }

    

    return (
    <div>
        <h1>Product Details</h1>
    </div>
    )
}

export default ProductDetails;