import React, { useContext } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import * as Cookies from "js-cookie";
import { StyledHeader } from "./Header.styles.js";
import AppContext from "../../context/AppContext.js";

const Header = () => {
  const { pathname } = useLocation();
  const { admin, setAdmin } = useContext(AppContext);

  const onLogout = () => {
    setAdmin(false);
    Cookies.remove("role");
  };

  return (
    <StyledHeader>
      <Menu mode="horizontal">
        {admin ? (
          <Menu.Item onClick={onLogout}>Logout</Menu.Item>
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
