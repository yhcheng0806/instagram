import React from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import Icon from "../icon";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";

import {
  Wrapper,
  Container,
  Logo,
  Search,
  // Input,
  Menus,
  MenuItem,
  Avatar,
} from "./styles";

const Header = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useSelector((state) => state);

  const history = useHistory();
  return !history.location.pathname.includes("share") ? (
    <Wrapper>
      <Container>
        <Logo
          onClick={() => history.push("/")}
          src="https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png"
        />
        <Search>
          <Icon type="icon-search" />
          搜索
          {/* <Input placeholder="" /> */}
        </Search>
        <Menus>
          <MenuItem onClick={() => history.push(ROUTES.HOME)}>
            <Icon type="icon-home" />
          </MenuItem>
          <MenuItem onClick={() => history.push(ROUTES.HOME)}>
            <Icon type="icon-share" />
          </MenuItem>
          <MenuItem onClick={() => history.push(ROUTES.SHARE)}>
            <Icon type="icon-add" />
          </MenuItem>
          <MenuItem onClick={() => history.push(ROUTES.HOME)}>
            <Icon type="icon-heart" />
          </MenuItem>
          <MenuItem onClick={() => history.push("/p/" + user.username)}>
            <Avatar src={user.avatar ? PF + user.avatar : defaultAvatar} />
          </MenuItem>
        </Menus>
      </Container>
    </Wrapper>
  ) : null;
};

export default Header;
