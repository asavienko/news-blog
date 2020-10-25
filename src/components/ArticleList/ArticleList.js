import React, { useContext } from "react";
import { Col, Row } from "antd";
import AppContext from "../../context/AppContext.js";
import SmallArticleCard from "../SmallArticleCard";

const ArticleList = () => {
  const { articleList } = useContext(AppContext);

  return (
    <Row gutter={[0, 16]}>
      {!!articleList.length &&
        articleList.map(({ id, publicationDate, title, smallDescription }) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={id}>
            <SmallArticleCard
              id={id}
              publicationDate={publicationDate}
              title={title}
              smallDescription={smallDescription}
            />
          </Col>
        ))}
    </Row>
  );
};

export default ArticleList;
