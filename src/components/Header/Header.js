import React, { useContext } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { StyledHeader } from "./Header.styles.js";
import AppContext from "../../context/AppContext.js";

const Header = () => {
  const { pathname } = useLocation();
  const { admin } = useContext(AppContext);

  return (
    <StyledHeader>
      <Menu mode="horizontal">
        {admin ? (
          <Menu.Item>Logout</Menu.Item>
        ) : (
          pathname !== "/login" && (
            <Menu.Item>
              <Link to="/login">Login</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </StyledHeader>
  );
};

export default Header;
