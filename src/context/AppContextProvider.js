import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Cookies from "js-cookie";
import AppContext from "./AppContext.js";
import articlesMockData from "../mockData/articles.json";

const AppContextProvider = ({ children }) => {
  const [articleList, setArticleList] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    setArticleList(Object.values(articlesMockData));
    const role = Cookies.get("role");

    if (role === "admin") setAdmin(true);
  }, []);

  const getArticleById = (currentId) => {
    return articleList.find(({ id }) => currentId === id);
  };

  return (
    <AppContext.Provider
      value={{ articleList, getArticleById, setAdmin, admin }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
AppContextProvider.defaultProps = {};

export default AppContextProvider;
