import React from "react";
import logo from "../../../assets/images/logo.png";

import {
  Wrapper,
  Container,
  Logo,
  Search,
  Icon,
  Input,
  Menus,
  MenuItem,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo >Instagram</Logo>
        <Search>
          <Icon />
          <Input />
        </Search>
        <Menus>
          <MenuItem>
            <Icon />
          </MenuItem>
          <MenuItem>
            <Icon />
          </MenuItem>
          <MenuItem>
            <Icon />
          </MenuItem>
          <MenuItem>
            <Icon />
          </MenuItem>
          <MenuItem>
            <Icon />
          </MenuItem>
        </Menus>
      </Container>
    </Wrapper>
  );
};

export default Header;
