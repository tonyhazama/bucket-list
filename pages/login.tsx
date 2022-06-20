import { Button, Form, Input, Spin } from 'antd';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Container from '../components/container';
import Loading from '../components/loading';
import { config } from '../services';
import { login, useUserData } from '../services/auth-service';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [form] = Form.useForm();
  const router = useRouter();
  const userData = useUserData();

  if (!userData) {
    router.push("/login")
  }

  const handleSubmit = async () => {
    setIsLoading(true);
    const user = form.getFieldsValue(); 
    const [res, err] = await login(user);
    if (res) {
      router.push("/");
    }
    setIsLoading(false);
  };

  const useDemoEmail = () => {
    form.setFieldsValue({
      email: config.username,
      password: config.password
    });
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Barito-do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="" id="main">
        <Container>
          <div className="p-8 py-16 max-w-md m-auto">
            <div className="mb-8 text-center">LOGIN</div>
            <Form form={form} onFinish={handleSubmit}>
              <div className="pb-2">
                <Form.Item name="email" rules={[{required: true, message: "Email is Required!" }]}>
                  <Input type="email" className="bg-gray-50 focus:bg-white" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: "Password is Required!" }]}>
                  <Input type="password" className="bg-gray-50 focus:bg-white" placeholder="Password" />
                </Form.Item>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <Button className="w-full" type="primary" htmlType="submit" disabled={isLoading}>
                  <Loading loading={isLoading} label="Submit" />
                </Button>
                <Button className="w-full" type="ghost" onClick={useDemoEmail}>Use Demo Email</Button>
              </div>
            </Form>
          </div>
        </Container>
      </main>
    </div>
  )
}
