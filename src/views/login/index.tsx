import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import api from "@/apis";
import storage from "@/utils/storage";
import type { ILoginParams } from "@/types";
import styles from "./index.module.less";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: ILoginParams) => {
    setLoading(true);
    try {
      console.log(values, "login");
      const data = await api.login(values);
      console.log(data, "login");
      message.success("登录成功");
      // 登录成功后，将token存储到localStorage中
      storage.set("token", data);
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h3 className={styles.title} style={{ color: "red" }}>
          欢迎登录!
        </h3>
        <Form
          name="login"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userPwd"
            label="密码"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
