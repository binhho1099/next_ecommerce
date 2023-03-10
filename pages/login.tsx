import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Tour,
  TourProps,
  message,
} from 'antd';
import { ILoginData } from 'interfaces';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Cookie } from 'utils/cookie';
import { useAppDispatch } from 'store/hooks';
import { setLoading, setUser } from 'store/Slices/appSlice';
import { auth, google, facebook, github } from 'configs/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { LocalStorage } from 'utils/localstorage';

function Login() {
  const [form] = Form.useForm();
  const ref1 = useRef(null);

  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(() => {
    if (localStorage.getItem('remember')) {
      return true;
    }
    return false;
  });
  const dispatch = useAppDispatch();

  const previousPath = LocalStorage.Get('previousPath');

  const initialValues: ILoginData = {
    username: '',
    password: '',
    remember: false,
  };

  const fetchLogin = async (value: ILoginData) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: value.username,
          password: value.password,
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      dispatch(setLoading(false));
      console.log(err);
    }
  };

  useEffect(() => {
    setOpen(true);
    if (remember) {
      const username = Cookie.Get('username');
      const password = Cookie.Get('password');
      form.setFieldsValue({
        username,
        password,
      });
    }
  }, []);

  const handleLogin = async (value: ILoginData) => {
    if (value) {
      try {
        const res = await fetchLogin(value);
        if (res.id) {
          if (remember) {
            localStorage.setItem('remember', JSON.stringify(true));
            Cookie.Set('username', value.username);
            Cookie.Set('password', value.password);
          } else {
            Cookie.Remove('username');
            Cookie.Remove('password');
          }

          const { email, firstName, lastName, image, token } = res;
          const dataUser = {
            displayName: firstName + lastName,
            photoURL: image,
            email: email,
          };
          dispatch(setUser(dataUser));
          dispatch(setLoading(false));
          Cookie.Set('token', res.toktoken);
          toast.success('????ng nh???p th??nh c??ng');
          if (previousPath) router.push(previousPath);
          else router.push('/');
        } else {
          dispatch(setLoading(false));
          toast.error('Sai t??i kho???n ho???c m???t kh???u');
        }
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    }
  };

  const loginSocial = async (provider: any) => {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      const { user } = result;
      const { displayName, photoURL, email } = user;
      const dataUser = {
        displayName,
        photoURL,
        email,
      };
      dispatch(setUser(dataUser));
      Cookie.Set('token', user.refreshToken);
      toast.success('????ng nh???p th??nh c??ng');

      if (previousPath) router.push(previousPath);
      else router.push('/');
    } else {
      toast.error('????ng nh???p th???t b???i');
    }
  };

  const logout = async () => {
    const result = await signOut(auth);
    console.log(result);
  };

  const steps: TourProps['steps'] = [
    {
      title: <h1>Th??ng tin t??i kho???n m???u ????? ????ng nh???p</h1>,
      description: (
        <div>
          <p>
            <b>T??i kho???n:</b> kminchelle
          </p>
          <p>
            <b>M???t kh???u:</b> 0lelplR
          </p>
        </div>
      ),
      target: () => ref1.current,
    },
  ];

  return (
    <div className="section layout">
      {contextHolder}
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      <div className="login">
        <h2 className="page-heading">????ng nh???p</h2>
        <div ref={ref1}>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleLogin}
            initialValues={initialValues}
          >
            <Form.Item
              label="T??i kho???n"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p t??i kho???n c???a b???n!',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="M???t kh???u"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p m???t kh???u c???a b???n!',
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  name="remember"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                >
                  Nh??? m???t kh???u
                </Checkbox>
                <Button
                  type="link"
                  onClick={() => {
                    messageApi.open({
                      type: 'info',
                      content: 'Ch???c n??ng ch??a ???????c ho??n thi???n',
                      duration: 10,
                    });
                  }}
                >
                  Qu??n m???t kh???u
                </Button>
              </div>
            </Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              ????ng nh???p
            </Button>
          </Form>
        </div>

        <p>- HO???C ????NG NH???P V???I -</p>
        <div className="login-social">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#0673e7',
              },
            }}
          >
            <Button
              type="primary"
              size="large"
              icon={<FacebookFilled />}
              onClick={() => {
                loginSocial(facebook);
              }}
            >
              FACEBOOK
            </Button>
          </ConfigProvider>

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#d34836',
              },
            }}
          >
            <Button
              type="primary"
              size="large"
              icon={<GoogleOutlined />}
              onClick={() => {
                loginSocial(google);
              }}
            >
              GOOGLE
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}

export default Login;
