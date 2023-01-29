import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import '../components/index.scss';
import '../styles/index.scss';
import { ConfigProvider, theme } from 'antd';
import { ToastContainer } from 'react-toastify';
import BackTop from '@/components/shared/backTop';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import FloatButtonApp from '@/components/shared/floatButtonApp';

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
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
            />
            {/* <BackTop /> */}
            <FloatButtonApp />
          </Layout>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}
