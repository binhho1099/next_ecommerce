import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { store } from '../store';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import '../components/index.scss';
import '../styles/index.scss';
import { ConfigProvider, theme } from 'antd';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ffbe0f',
        },
      }}
    >
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ConfigProvider>
  );
}
