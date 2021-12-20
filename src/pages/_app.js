import Theme from '../styles/theme';
import { Provider } from 'react-redux'
import store from '../components/redux/store';
import { Container } from '../layout/LayoutStyles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './styles.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <Container>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </Theme>
      </Provider>
    </>
  );
}
