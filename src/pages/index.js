import { Layout } from '../layout/Layout';
import { Provider } from 'react-redux';
import store from '../components/redux/store'
import ProductListing from '../components/ProductListing';

const Home = () => {
  return (
    <Provider store={store}>
    <Layout>
      <ProductListing>
        
      </ProductListing>
    </Layout>
    </Provider>
  );
};

export default Home;
