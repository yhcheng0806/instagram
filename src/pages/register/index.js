import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import * as Actions from "../../context/actions/user";

import {
  Wrapper,
  Container,
  Form,
  Logo,
  FormItem,
  Input,
  Tip,
  Button,
  ErrorTip,
  Bottom,
} from "./styles";
import * as ROUTES from "../../constants/routes";

const Register = ({ history, ...props }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      setFormData({});
      setLoading(false);
      setError("");
    };
  }, []);

  const submit = () => {
    if (loading) return;
    if (!checkData()) return;

    setLoading(true);
    dispatch(
      Actions.register(formData, history, (error) => {
        setLoading(false);
        setError(error);
      })
    );
  };

  const checkData = () => {
    const { account, username, password } = formData;
    return account && username && password;
  };

  const handleData = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <Container>
        <Form>
          <Logo src="https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png" />
          <FormItem>
            <Input
              placeholder="手机号或邮箱"
              name="account"
              onChange={(e) => {
                handleData(e);
              }}
            />
          </FormItem>
          <FormItem>
            <Input
              placeholder="名称"
              name="username"
              onChange={(e) => {
                handleData(e);
              }}
            />
          </FormItem>
          <FormItem>
            <Input
              type="password"
              placeholder="密码"
              name="password"
              onChange={(e) => {
                handleData(e);
              }}
            />
          </FormItem>
          <Tip>
            注册即表示你同意我们的 条款 、 数据使用政策 和 Cookie 政策 。
          </Tip>
          <Button className={checkData() && "active"} onClick={submit}>
            {loading ? <LoadingOutlined /> : "注册"}
          </Button>
          {error && <ErrorTip>{error}</ErrorTip>}
        </Form>
        <Bottom>
          <strong>有帐号了？</strong>
          <span onClick={() => history.push(ROUTES.LOGIN)}>登录</span>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Register;
