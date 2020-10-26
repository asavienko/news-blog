import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as Cookies from "js-cookie";
import moment from "moment";
import AppContext from "./AppContext.js";
import articlesMockData from "../mockData/articles.json";

const AppContextProvider = ({ children }) => {
  const [articleList, setArticleList] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const sortedArr = Object.values(articlesMockData).sort(
      (a, b) => moment(b.publicationDate) - moment(a.publicationDate)
    );
    setArticleList(sortedArr);
    const role = Cookies.get("role");

    if (role === "admin") setAdmin(true);
  }, []);

  const getArticleById = (articleId) => {
    return articleList.find(({ id }) => articleId === id);
  };

  const deleteArticle = (articleId) => {
    setArticleList(articleList.filter(({ id }) => id !== articleId));
  };

  return (
    <AppContext.Provider
      value={{ articleList, getArticleById, setAdmin, admin, deleteArticle }}
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
