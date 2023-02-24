import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import '../components/index.scss';
import '../styles/index.scss';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import FloatButtonApp from '@/components/shared/floatButtonApp';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LocalStorage } from 'utils/localstorage';

export default function App({ Component, pageProps }: AppProps) {
  const [previousPath, setPreviousPath] = useState<string>('');

  const router = useRouter();
  useEffect(() => {
    LocalStorage.Set('previousPath', previousPath);
    setPreviousPath(router.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

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
              position="top-right"
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
