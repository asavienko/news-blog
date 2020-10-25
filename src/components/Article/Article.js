import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography } from "antd";
import AppContext from "../../context/AppContext.js";
import { getRandomImage } from "../../requsts";
import { StyledDescription } from "./Article.styles.js";

const { Title } = Typography;

const Article = () => {
  const { getArticleById, articleList } = useContext(AppContext);
  const { id } = useParams();
  const { state } = useLocation();

  const [article, setArticle] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const foundArticle = getArticleById(id);
    setArticle(foundArticle);
  }, [articleList, id]);

  useEffect(() => {
    if (!state) return;

    state.image ? setImage(state.image) : getRandomImage().then(setImage);
  }, [state]);

  return (
    !!article && (
      <>
        <img src={image} alt="img" />
        <Title>{article.title}</Title>
        <StyledDescription type="secondary">
          {article.fullDescription}
        </StyledDescription>
      </>
    )
  );
};

export default Article;
