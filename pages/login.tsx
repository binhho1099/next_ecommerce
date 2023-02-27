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
import dayjs from 'dayjs';
import { useAppDispatch } from 'store/hooks';
import { setLoading, setUser } from 'store/Slices/appSlice';
import { auth, google, facebook, github } from 'configs/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { LocalStorage } from 'utils/localstorage';

function Login() {
  const [form] = Form.useForm();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState<boolean>(false);
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
  }, []);

  const handleLogin = async (value: ILoginData) => {
    if (value) {
      try {
        const res = await fetchLogin(value);
        if (res.id) {
          const { email, firstName, lastName, image, token } = res;

          const dataUser = {
            displayName: firstName + lastName,
            photoURL: image,
            email: email,
          };
          dispatch(setUser(dataUser));
          dispatch(setLoading(false));
          Cookie.Set('token', res.toktoken);
          toast.success('Đăng nhập thành công');
          if (previousPath) router.push(previousPath);
          else router.push('/');
        } else {
          dispatch(setLoading(false));
          toast.error('Sai tài khoản hoặc mật khẩu');
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
      toast.success('Đăng nhập thành công');

      if (previousPath) router.push(previousPath);
      else router.push('/');
    } else {
      toast.error('Đăng nhập thất bại');
    }
  };

  const logout = async () => {
    const result = await signOut(auth);
    console.log(result);
  };

  const steps: TourProps['steps'] = [
    {
      title: <h1>Thông tin tài khoản mẫu để đăng nhập</h1>,
      description: (
        <div>
          <p>
            <b>Tài khoản:</b> kminchelle
          </p>
          <p>
            <b>Mật khẩu:</b> 0lelplR
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
        <h2 className="page-heading">Đăng nhập</h2>
        <div ref={ref1}>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleLogin}
            initialValues={initialValues}
          >
            <Form.Item
              label="Tài khoản"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tài khoản của bạn!',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu của bạn!',
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
                <Checkbox name="remember">Nhớ mật khẩu</Checkbox>
                <Button
                  type="link"
                  onClick={() => {
                    messageApi.open({
                      type: 'info',
                      content: 'Chức năng chưa được hoàn thiện',
                      duration: 10,
                    });
                  }}
                >
                  Quên mật khẩu
                </Button>
              </div>
            </Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Đăng nhập
            </Button>
          </Form>
        </div>

        <p>- HOẶC ĐĂNG NHẬP VỚI -</p>
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
