import React from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  return (
    <Wrapper>
      <Container>
        <Logo
          onClick={() => history.push("/")}
          src="https://fontmeme.com/permalink/210823/50ff875ad698b68a5204ae465788590a.png"
        />
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
