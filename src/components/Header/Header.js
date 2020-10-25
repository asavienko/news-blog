import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles.js";

const Header = () => {
  return (
    <StyledHeader>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
