import React from "react";
import { useSelector } from "react-redux";

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
  return (
    <Wrapper>
      <Container>
        <Form>
          <Logo src='https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png' />
          <FormItem>
            <Input placeholder="手机号、帐号或邮箱" />
          </FormItem>
          <FormItem>
            <Input type="password" placeholder="密码" />
          </FormItem>
          <Tip>忘记密码了？{user.avatar}</Tip>
          <Button onClick={() => history.push(ROUTES.HOME)}>登录</Button>
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
