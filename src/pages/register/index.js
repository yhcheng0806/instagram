import React from "react";

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

const Register = ({ history, ...props }) => {
  return (
    <Wrapper>
      <Container>
        <Form>
          <Logo src='https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png' />
          <FormItem>
            <Input placeholder="手机号或邮箱" />
          </FormItem>
          <FormItem>
            <Input placeholder="名称" />
          </FormItem>
          <FormItem>
            <Input type="password" placeholder="密码" />
          </FormItem>
          <Tip>注册即表示你同意我们的 条款 、 数据使用政策 和 Cookie 政策 。</Tip>
          <Button>注册</Button>
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
