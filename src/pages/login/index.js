import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  Bottom,
} from "./styles";
import * as ROUTES from "../../constants/routes";

const Login = ({ history, ...props }) => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (loading) return;

    setLoading(true);
    dispatch(
      Actions.login(formData, () => {
        console.log("---13---");
        setLoading(false);
        history.push(ROUTES.HOME);
      })
    );
  };

  const handleInput = ({ target: { name, value } }) => {
    setFormData({ [name]: value });
  };

  return (
    <Wrapper>
      <Container>
        <Form>
          <Logo src="https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png" />
          <FormItem>
            <Input
              placeholder="手机号、帐号或邮箱"
              name="account"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </FormItem>
          <FormItem>
            <Input
              type="password"
              placeholder="密码"
              name="password"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </FormItem>
          <Tip>忘记密码了？{user.avatar}</Tip>
          <Button onClick={submit}>
            {loading ? <LoadingOutlined /> : "登录"}
          </Button>
        </Form>
        <Bottom>
          <strong>没有帐号？</strong>
          <span onClick={() => history.push(ROUTES.REGISTER)}>注册</span>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default Login;
