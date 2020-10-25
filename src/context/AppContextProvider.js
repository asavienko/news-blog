import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext.js";
import articlesMockData from "../mockData/articles.json";

const AppContextProvider = ({ children }) => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setArticleList(Object.values(articlesMockData));
  }, []);

  const getArticleById = (currentId) => {
    return articleList.find(({ id }) => currentId === id);
  };

  return (
    <AppContext.Provider value={{ articleList, getArticleById }}>
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
