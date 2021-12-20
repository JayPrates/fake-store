import Script from 'next/script'
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../components/redux/actions/productActions';



const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const router = useRouter();
    const productId = router.query.id;
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${router.query.id}`)
        dispatch(selectedProduct(res.data));
    }

    useEffect(() => {
        if(productId && productId !== '') 
        fetchProductDetail();
    }, [productId])

    

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
    <div>
        <h1>Product Details</h1>
    </div>
    <div className="ui grid container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  </>
    )
}

export default ProductDetails;