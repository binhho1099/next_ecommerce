import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { store } from '../store';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import '../components/index.scss';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
