import Theme from '../styles/theme';
import { Provider } from 'react-redux'
import store from '../components/redux/store';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      </Provider>
    </>
  );
}
 